# `dataOciApmSyntheticsPublicVantagePoints` Submodule <a name="`dataOciApmSyntheticsPublicVantagePoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmSyntheticsPublicVantagePoints <a name="DataOciApmSyntheticsPublicVantagePoints" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points oci_apm_synthetics_public_vantage_points}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_public_vantage_points.DataOciApmSyntheticsPublicVantagePoints;

DataOciApmSyntheticsPublicVantagePoints.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .apmDomainId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciApmSyntheticsPublicVantagePointsFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.apmDomainId">apmDomainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#apm_domain_id DataOciApmSyntheticsPublicVantagePoints#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#display_name DataOciApmSyntheticsPublicVantagePoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter">DataOciApmSyntheticsPublicVantagePointsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#id DataOciApmSyntheticsPublicVantagePoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#name DataOciApmSyntheticsPublicVantagePoints#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.apmDomainId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#apm_domain_id DataOciApmSyntheticsPublicVantagePoints#apm_domain_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#display_name DataOciApmSyntheticsPublicVantagePoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter">DataOciApmSyntheticsPublicVantagePointsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#filter DataOciApmSyntheticsPublicVantagePoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#id DataOciApmSyntheticsPublicVantagePoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#name DataOciApmSyntheticsPublicVantagePoints#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciApmSyntheticsPublicVantagePointsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter">DataOciApmSyntheticsPublicVantagePointsFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetName"></a>

```java
public void resetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmSyntheticsPublicVantagePoints resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_public_vantage_points.DataOciApmSyntheticsPublicVantagePoints;

DataOciApmSyntheticsPublicVantagePoints.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_public_vantage_points.DataOciApmSyntheticsPublicVantagePoints;

DataOciApmSyntheticsPublicVantagePoints.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_public_vantage_points.DataOciApmSyntheticsPublicVantagePoints;

DataOciApmSyntheticsPublicVantagePoints.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_public_vantage_points.DataOciApmSyntheticsPublicVantagePoints;

DataOciApmSyntheticsPublicVantagePoints.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciApmSyntheticsPublicVantagePoints.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciApmSyntheticsPublicVantagePoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciApmSyntheticsPublicVantagePoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciApmSyntheticsPublicVantagePoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmSyntheticsPublicVantagePoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList">DataOciApmSyntheticsPublicVantagePointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.publicVantagePointCollection">publicVantagePointCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.apmDomainIdInput">apmDomainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter">DataOciApmSyntheticsPublicVantagePointsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.apmDomainId">apmDomainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.filter"></a>

```java
public DataOciApmSyntheticsPublicVantagePointsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList">DataOciApmSyntheticsPublicVantagePointsFilterList</a>

---

##### `publicVantagePointCollection`<sup>Required</sup> <a name="publicVantagePointCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.publicVantagePointCollection"></a>

```java
public DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList getPublicVantagePointCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList</a>

---

##### `apmDomainIdInput`<sup>Optional</sup> <a name="apmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.apmDomainIdInput"></a>

```java
public java.lang.String getApmDomainIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter">DataOciApmSyntheticsPublicVantagePointsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.apmDomainId"></a>

```java
public java.lang.String getApmDomainId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmSyntheticsPublicVantagePointsConfig <a name="DataOciApmSyntheticsPublicVantagePointsConfig" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_public_vantage_points.DataOciApmSyntheticsPublicVantagePointsConfig;

DataOciApmSyntheticsPublicVantagePointsConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .apmDomainId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciApmSyntheticsPublicVantagePointsFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.apmDomainId">apmDomainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#apm_domain_id DataOciApmSyntheticsPublicVantagePoints#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#display_name DataOciApmSyntheticsPublicVantagePoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter">DataOciApmSyntheticsPublicVantagePointsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#id DataOciApmSyntheticsPublicVantagePoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#name DataOciApmSyntheticsPublicVantagePoints#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.apmDomainId"></a>

```java
public java.lang.String getApmDomainId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#apm_domain_id DataOciApmSyntheticsPublicVantagePoints#apm_domain_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#display_name DataOciApmSyntheticsPublicVantagePoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter">DataOciApmSyntheticsPublicVantagePointsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#filter DataOciApmSyntheticsPublicVantagePoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#id DataOciApmSyntheticsPublicVantagePoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#name DataOciApmSyntheticsPublicVantagePoints#name}.

---

### DataOciApmSyntheticsPublicVantagePointsFilter <a name="DataOciApmSyntheticsPublicVantagePointsFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_public_vantage_points.DataOciApmSyntheticsPublicVantagePointsFilter;

DataOciApmSyntheticsPublicVantagePointsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#name DataOciApmSyntheticsPublicVantagePoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#values DataOciApmSyntheticsPublicVantagePoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#regex DataOciApmSyntheticsPublicVantagePoints#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#name DataOciApmSyntheticsPublicVantagePoints#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#values DataOciApmSyntheticsPublicVantagePoints#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#regex DataOciApmSyntheticsPublicVantagePoints#regex}.

---

### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_public_vantage_points.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection;

DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection.builder()
    .build();
```


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_public_vantage_points.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems;

DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems.builder()
    .build();
```


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_public_vantage_points.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo;

DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmSyntheticsPublicVantagePointsFilterList <a name="DataOciApmSyntheticsPublicVantagePointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_public_vantage_points.DataOciApmSyntheticsPublicVantagePointsFilterList;

new DataOciApmSyntheticsPublicVantagePointsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.get"></a>

```java
public DataOciApmSyntheticsPublicVantagePointsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter">DataOciApmSyntheticsPublicVantagePointsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter">DataOciApmSyntheticsPublicVantagePointsFilter</a>>

---


### DataOciApmSyntheticsPublicVantagePointsFilterOutputReference <a name="DataOciApmSyntheticsPublicVantagePointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_public_vantage_points.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference;

new DataOciApmSyntheticsPublicVantagePointsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter">DataOciApmSyntheticsPublicVantagePointsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter">DataOciApmSyntheticsPublicVantagePointsFilter</a>

---


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_public_vantage_points.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList;

new DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.get"></a>

```java
public DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_public_vantage_points.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference;

new DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.adminDivCode">adminDivCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.cityName">cityName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.countryName">countryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.latitude">latitude</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.longitude">longitude</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminDivCode`<sup>Required</sup> <a name="adminDivCode" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.adminDivCode"></a>

```java
public java.lang.String getAdminDivCode();
```

- *Type:* java.lang.String

---

##### `cityName`<sup>Required</sup> <a name="cityName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.cityName"></a>

```java
public java.lang.String getCityName();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `countryName`<sup>Required</sup> <a name="countryName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.countryName"></a>

```java
public java.lang.String getCountryName();
```

- *Type:* java.lang.String

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.latitude"></a>

```java
public java.lang.Number getLatitude();
```

- *Type:* java.lang.Number

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.longitude"></a>

```java
public java.lang.Number getLongitude();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.internalValue"></a>

```java
public DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo</a>

---


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_public_vantage_points.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList;

new DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.get"></a>

```java
public DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_public_vantage_points.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference;

new DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.geo">geo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `geo`<sup>Required</sup> <a name="geo" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.geo"></a>

```java
public DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList getGeo();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems</a>

---


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_public_vantage_points.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList;

new DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.get"></a>

```java
public DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_public_vantage_points.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference;

new DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.items"></a>

```java
public DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.internalValue"></a>

```java
public DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection</a>

---



