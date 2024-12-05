# `dataOciOcvpSddcs` Submodule <a name="`dataOciOcvpSddcs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOcvpSddcs <a name="DataOciOcvpSddcs" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs oci_ocvp_sddcs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcs;

DataOciOcvpSddcs.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentId(java.lang.String)
//  .computeAvailabilityDomain(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOcvpSddcsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#compartment_id DataOciOcvpSddcs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#compute_availability_domain DataOciOcvpSddcs#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#display_name DataOciOcvpSddcs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter">DataOciOcvpSddcsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#id DataOciOcvpSddcs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#state DataOciOcvpSddcs#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#compartment_id DataOciOcvpSddcs#compartment_id}.

---

##### `computeAvailabilityDomain`<sup>Optional</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.computeAvailabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#compute_availability_domain DataOciOcvpSddcs#compute_availability_domain}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#display_name DataOciOcvpSddcs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter">DataOciOcvpSddcsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#filter DataOciOcvpSddcs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#id DataOciOcvpSddcs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#state DataOciOcvpSddcs#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetComputeAvailabilityDomain">resetComputeAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciOcvpSddcsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter">DataOciOcvpSddcsFilter</a>>

---

##### `resetComputeAvailabilityDomain` <a name="resetComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetComputeAvailabilityDomain"></a>

```java
public void resetComputeAvailabilityDomain()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOcvpSddcs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcs;

DataOciOcvpSddcs.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcs;

DataOciOcvpSddcs.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcs;

DataOciOcvpSddcs.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcs;

DataOciOcvpSddcs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOcvpSddcs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOcvpSddcs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOcvpSddcs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOcvpSddcs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOcvpSddcs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList">DataOciOcvpSddcsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.sddcCollection">sddcCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList">DataOciOcvpSddcsSddcCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.computeAvailabilityDomainInput">computeAvailabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter">DataOciOcvpSddcsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.filter"></a>

```java
public DataOciOcvpSddcsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList">DataOciOcvpSddcsFilterList</a>

---

##### `sddcCollection`<sup>Required</sup> <a name="sddcCollection" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.sddcCollection"></a>

```java
public DataOciOcvpSddcsSddcCollectionList getSddcCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList">DataOciOcvpSddcsSddcCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `computeAvailabilityDomainInput`<sup>Optional</sup> <a name="computeAvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.computeAvailabilityDomainInput"></a>

```java
public java.lang.String getComputeAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter">DataOciOcvpSddcsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `computeAvailabilityDomain`<sup>Required</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.computeAvailabilityDomain"></a>

```java
public java.lang.String getComputeAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcs.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOcvpSddcsConfig <a name="DataOciOcvpSddcsConfig" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsConfig;

DataOciOcvpSddcsConfig.builder()
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
    .compartmentId(java.lang.String)
//  .computeAvailabilityDomain(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOcvpSddcsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#compartment_id DataOciOcvpSddcs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#compute_availability_domain DataOciOcvpSddcs#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#display_name DataOciOcvpSddcs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter">DataOciOcvpSddcsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#id DataOciOcvpSddcs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#state DataOciOcvpSddcs#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#compartment_id DataOciOcvpSddcs#compartment_id}.

---

##### `computeAvailabilityDomain`<sup>Optional</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.computeAvailabilityDomain"></a>

```java
public java.lang.String getComputeAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#compute_availability_domain DataOciOcvpSddcs#compute_availability_domain}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#display_name DataOciOcvpSddcs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter">DataOciOcvpSddcsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#filter DataOciOcvpSddcs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#id DataOciOcvpSddcs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#state DataOciOcvpSddcs#state}.

---

### DataOciOcvpSddcsFilter <a name="DataOciOcvpSddcsFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsFilter;

DataOciOcvpSddcsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#name DataOciOcvpSddcs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#values DataOciOcvpSddcs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#regex DataOciOcvpSddcs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#name DataOciOcvpSddcs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#values DataOciOcvpSddcs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddcs#regex DataOciOcvpSddcs#regex}.

---

### DataOciOcvpSddcsSddcCollection <a name="DataOciOcvpSddcsSddcCollection" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollection;

DataOciOcvpSddcsSddcCollection.builder()
    .build();
```


### DataOciOcvpSddcsSddcCollectionDatastores <a name="DataOciOcvpSddcsSddcCollectionDatastores" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastores.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionDatastores;

DataOciOcvpSddcsSddcCollectionDatastores.builder()
    .build();
```


### DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses <a name="DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses;

DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses.builder()
    .build();
```


### DataOciOcvpSddcsSddcCollectionInitialConfiguration <a name="DataOciOcvpSddcsSddcCollectionInitialConfiguration" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionInitialConfiguration;

DataOciOcvpSddcsSddcCollectionInitialConfiguration.builder()
    .build();
```


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations;

DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations.builder()
    .build();
```


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores;

DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores.builder()
    .build();
```


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration;

DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.builder()
    .build();
```


### DataOciOcvpSddcsSddcCollectionUpgradeLicenses <a name="DataOciOcvpSddcsSddcCollectionUpgradeLicenses" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicenses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicenses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicenses;

DataOciOcvpSddcsSddcCollectionUpgradeLicenses.builder()
    .build();
```


### DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects <a name="DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects;

DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOcvpSddcsFilterList <a name="DataOciOcvpSddcsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsFilterList;

new DataOciOcvpSddcsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.get"></a>

```java
public DataOciOcvpSddcsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter">DataOciOcvpSddcsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter">DataOciOcvpSddcsFilter</a>>

---


### DataOciOcvpSddcsFilterOutputReference <a name="DataOciOcvpSddcsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsFilterOutputReference;

new DataOciOcvpSddcsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter">DataOciOcvpSddcsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsFilter">DataOciOcvpSddcsFilter</a>

---


### DataOciOcvpSddcsSddcCollectionDatastoresList <a name="DataOciOcvpSddcsSddcCollectionDatastoresList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionDatastoresList;

new DataOciOcvpSddcsSddcCollectionDatastoresList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.get"></a>

```java
public DataOciOcvpSddcsSddcCollectionDatastoresOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOcvpSddcsSddcCollectionDatastoresOutputReference <a name="DataOciOcvpSddcsSddcCollectionDatastoresOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference;

new DataOciOcvpSddcsSddcCollectionDatastoresOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.blockVolumeIds">blockVolumeIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.datastoreType">datastoreType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastores">DataOciOcvpSddcsSddcCollectionDatastores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `blockVolumeIds`<sup>Required</sup> <a name="blockVolumeIds" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.blockVolumeIds"></a>

```java
public java.util.List<java.lang.String> getBlockVolumeIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

---

##### `datastoreType`<sup>Required</sup> <a name="datastoreType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.datastoreType"></a>

```java
public java.lang.String getDatastoreType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresOutputReference.property.internalValue"></a>

```java
public DataOciOcvpSddcsSddcCollectionDatastores getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastores">DataOciOcvpSddcsSddcCollectionDatastores</a>

---


### DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList <a name="DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList;

new DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.get"></a>

```java
public DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference <a name="DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference;

new DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.activationKey">activationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.systemName">systemName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses">DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activationKey`<sup>Required</sup> <a name="activationKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.activationKey"></a>

```java
public java.lang.String getActivationKey();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `systemName`<sup>Required</sup> <a name="systemName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.systemName"></a>

```java
public java.lang.String getSystemName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesOutputReference.property.internalValue"></a>

```java
public DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses">DataOciOcvpSddcsSddcCollectionHcxOnPremLicenses</a>

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList;

new DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.get"></a>

```java
public DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference;

new DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIds">blockVolumeIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreType">datastoreType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `blockVolumeIds`<sup>Required</sup> <a name="blockVolumeIds" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIds"></a>

```java
public java.util.List<java.lang.String> getBlockVolumeIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `datastoreType`<sup>Required</sup> <a name="datastoreType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreType"></a>

```java
public java.lang.String getDatastoreType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.internalValue"></a>

```java
public DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastores</a>

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList;

new DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.get"></a>

```java
public DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList;

new DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.get"></a>

```java
public DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference;

new DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanId">hcxVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId">nsxEdgeUplink1VlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId">nsxEdgeUplink2VlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId">nsxEdgeVtepVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanId">nsxVtepVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetId">provisioningSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanId">provisioningVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanId">replicationVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanId">vmotionVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanId">vsanVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanId">vsphereVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hcxVlanId`<sup>Required</sup> <a name="hcxVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanId"></a>

```java
public java.lang.String getHcxVlanId();
```

- *Type:* java.lang.String

---

##### `nsxEdgeUplink1VlanId`<sup>Required</sup> <a name="nsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId"></a>

```java
public java.lang.String getNsxEdgeUplink1VlanId();
```

- *Type:* java.lang.String

---

##### `nsxEdgeUplink2VlanId`<sup>Required</sup> <a name="nsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId"></a>

```java
public java.lang.String getNsxEdgeUplink2VlanId();
```

- *Type:* java.lang.String

---

##### `nsxEdgeVtepVlanId`<sup>Required</sup> <a name="nsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId"></a>

```java
public java.lang.String getNsxEdgeVtepVlanId();
```

- *Type:* java.lang.String

---

##### `nsxVtepVlanId`<sup>Required</sup> <a name="nsxVtepVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanId"></a>

```java
public java.lang.String getNsxVtepVlanId();
```

- *Type:* java.lang.String

---

##### `provisioningSubnetId`<sup>Required</sup> <a name="provisioningSubnetId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetId"></a>

```java
public java.lang.String getProvisioningSubnetId();
```

- *Type:* java.lang.String

---

##### `provisioningVlanId`<sup>Required</sup> <a name="provisioningVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanId"></a>

```java
public java.lang.String getProvisioningVlanId();
```

- *Type:* java.lang.String

---

##### `replicationVlanId`<sup>Required</sup> <a name="replicationVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanId"></a>

```java
public java.lang.String getReplicationVlanId();
```

- *Type:* java.lang.String

---

##### `vmotionVlanId`<sup>Required</sup> <a name="vmotionVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanId"></a>

```java
public java.lang.String getVmotionVlanId();
```

- *Type:* java.lang.String

---

##### `vsanVlanId`<sup>Required</sup> <a name="vsanVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanId"></a>

```java
public java.lang.String getVsanVlanId();
```

- *Type:* java.lang.String

---

##### `vsphereVlanId`<sup>Required</sup> <a name="vsphereVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanId"></a>

```java
public java.lang.String getVsphereVlanId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a>

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference;

new DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.actualEsxiHostsCount">actualEsxiHostsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationId">capacityReservationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastores">datastores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCount">esxiHostsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitment">initialCommitment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCount">initialHostOcpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeName">initialHostShapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefix">instanceDisplayNamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabled">isShieldedInstanceEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereType">vsphereType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidr">workloadNetworkCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actualEsxiHostsCount`<sup>Required</sup> <a name="actualEsxiHostsCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.actualEsxiHostsCount"></a>

```java
public java.lang.Number getActualEsxiHostsCount();
```

- *Type:* java.lang.Number

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationId"></a>

```java
public java.lang.String getCapacityReservationId();
```

- *Type:* java.lang.String

---

##### `computeAvailabilityDomain`<sup>Required</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomain"></a>

```java
public java.lang.String getComputeAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `datastores`<sup>Required</sup> <a name="datastores" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastores"></a>

```java
public DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList getDatastores();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsDatastoresList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `esxiHostsCount`<sup>Required</sup> <a name="esxiHostsCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCount"></a>

```java
public java.lang.Number getEsxiHostsCount();
```

- *Type:* java.lang.Number

---

##### `initialCommitment`<sup>Required</sup> <a name="initialCommitment" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitment"></a>

```java
public java.lang.String getInitialCommitment();
```

- *Type:* java.lang.String

---

##### `initialHostOcpuCount`<sup>Required</sup> <a name="initialHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCount"></a>

```java
public java.lang.Number getInitialHostOcpuCount();
```

- *Type:* java.lang.Number

---

##### `initialHostShapeName`<sup>Required</sup> <a name="initialHostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeName"></a>

```java
public java.lang.String getInitialHostShapeName();
```

- *Type:* java.lang.String

---

##### `instanceDisplayNamePrefix`<sup>Required</sup> <a name="instanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefix"></a>

```java
public java.lang.String getInstanceDisplayNamePrefix();
```

- *Type:* java.lang.String

---

##### `isShieldedInstanceEnabled`<sup>Required</sup> <a name="isShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabled"></a>

```java
public IResolvable getIsShieldedInstanceEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfiguration"></a>

```java
public DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList getNetworkConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList</a>

---

##### `vsphereType`<sup>Required</sup> <a name="vsphereType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereType"></a>

```java
public java.lang.String getVsphereType();
```

- *Type:* java.lang.String

---

##### `workloadNetworkCidr`<sup>Required</sup> <a name="workloadNetworkCidr" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidr"></a>

```java
public java.lang.String getWorkloadNetworkCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsOutputReference.property.internalValue"></a>

```java
public DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurations</a>

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationList <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList;

new DataOciOcvpSddcsSddcCollectionInitialConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.get"></a>

```java
public DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference <a name="DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference;

new DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.initialClusterConfigurations">initialClusterConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfiguration">DataOciOcvpSddcsSddcCollectionInitialConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `initialClusterConfigurations`<sup>Required</sup> <a name="initialClusterConfigurations" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.initialClusterConfigurations"></a>

```java
public DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList getInitialClusterConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList">DataOciOcvpSddcsSddcCollectionInitialConfigurationInitialClusterConfigurationsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationOutputReference.property.internalValue"></a>

```java
public DataOciOcvpSddcsSddcCollectionInitialConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfiguration">DataOciOcvpSddcsSddcCollectionInitialConfiguration</a>

---


### DataOciOcvpSddcsSddcCollectionList <a name="DataOciOcvpSddcsSddcCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionList;

new DataOciOcvpSddcsSddcCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.get"></a>

```java
public DataOciOcvpSddcsSddcCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOcvpSddcsSddcCollectionOutputReference <a name="DataOciOcvpSddcsSddcCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionOutputReference;

new DataOciOcvpSddcsSddcCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.actualEsxiHostsCount">actualEsxiHostsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.capacityReservationId">capacityReservationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.clustersCount">clustersCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.datastores">datastores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList">DataOciOcvpSddcsSddcCollectionDatastoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.esxiHostsCount">esxiHostsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.esxiSoftwareVersion">esxiSoftwareVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxAction">hcxAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxFqdn">hcxFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxInitialPassword">hcxInitialPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxMode">hcxMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxOnPremKey">hcxOnPremKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxOnPremLicenses">hcxOnPremLicenses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList">DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxPrivateIpId">hcxPrivateIpId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxVlanId">hcxVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialConfiguration">initialConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList">DataOciOcvpSddcsSddcCollectionInitialConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialHostOcpuCount">initialHostOcpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialHostShapeName">initialHostShapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialSku">initialSku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.instanceDisplayNamePrefix">instanceDisplayNamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isHcxEnabled">isHcxEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isHcxEnterpriseEnabled">isHcxEnterpriseEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isHcxPendingDowngrade">isHcxPendingDowngrade</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isShieldedInstanceEnabled">isShieldedInstanceEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isSingleHostSddc">isSingleHostSddc</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeUplink1VlanId">nsxEdgeUplink1VlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeUplink2VlanId">nsxEdgeUplink2VlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeUplinkIpId">nsxEdgeUplinkIpId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeVtepVlanId">nsxEdgeVtepVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerFqdn">nsxManagerFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerInitialPassword">nsxManagerInitialPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerPrivateIpId">nsxManagerPrivateIpId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerUsername">nsxManagerUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxOverlaySegmentName">nsxOverlaySegmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxVtepVlanId">nsxVtepVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.provisioningSubnetId">provisioningSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.provisioningVlanId">provisioningVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.refreshHcxLicenseStatus">refreshHcxLicenseStatus</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.replicationVlanId">replicationVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.reservingHcxOnPremiseLicenseKeys">reservingHcxOnPremiseLicenseKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.sshAuthorizedKeys">sshAuthorizedKeys</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeHcxBillingCycleEnd">timeHcxBillingCycleEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeHcxLicenseStatusUpdated">timeHcxLicenseStatusUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.upgradeLicenses">upgradeLicenses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList">DataOciOcvpSddcsSddcCollectionUpgradeLicensesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterFqdn">vcenterFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterInitialPassword">vcenterInitialPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterPrivateIpId">vcenterPrivateIpId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterUsername">vcenterUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vmotionVlanId">vmotionVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vmwareSoftwareVersion">vmwareSoftwareVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsanVlanId">vsanVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsphereUpgradeGuide">vsphereUpgradeGuide</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsphereUpgradeObjects">vsphereUpgradeObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList">DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsphereVlanId">vsphereVlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.workloadNetworkCidr">workloadNetworkCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollection">DataOciOcvpSddcsSddcCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actualEsxiHostsCount`<sup>Required</sup> <a name="actualEsxiHostsCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.actualEsxiHostsCount"></a>

```java
public java.lang.Number getActualEsxiHostsCount();
```

- *Type:* java.lang.Number

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.capacityReservationId"></a>

```java
public java.lang.String getCapacityReservationId();
```

- *Type:* java.lang.String

---

##### `clustersCount`<sup>Required</sup> <a name="clustersCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.clustersCount"></a>

```java
public java.lang.Number getClustersCount();
```

- *Type:* java.lang.Number

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `computeAvailabilityDomain`<sup>Required</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.computeAvailabilityDomain"></a>

```java
public java.lang.String getComputeAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `datastores`<sup>Required</sup> <a name="datastores" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.datastores"></a>

```java
public DataOciOcvpSddcsSddcCollectionDatastoresList getDatastores();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionDatastoresList">DataOciOcvpSddcsSddcCollectionDatastoresList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `esxiHostsCount`<sup>Required</sup> <a name="esxiHostsCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.esxiHostsCount"></a>

```java
public java.lang.Number getEsxiHostsCount();
```

- *Type:* java.lang.Number

---

##### `esxiSoftwareVersion`<sup>Required</sup> <a name="esxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.esxiSoftwareVersion"></a>

```java
public java.lang.String getEsxiSoftwareVersion();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `hcxAction`<sup>Required</sup> <a name="hcxAction" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxAction"></a>

```java
public java.lang.String getHcxAction();
```

- *Type:* java.lang.String

---

##### `hcxFqdn`<sup>Required</sup> <a name="hcxFqdn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxFqdn"></a>

```java
public java.lang.String getHcxFqdn();
```

- *Type:* java.lang.String

---

##### `hcxInitialPassword`<sup>Required</sup> <a name="hcxInitialPassword" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxInitialPassword"></a>

```java
public java.lang.String getHcxInitialPassword();
```

- *Type:* java.lang.String

---

##### `hcxMode`<sup>Required</sup> <a name="hcxMode" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxMode"></a>

```java
public java.lang.String getHcxMode();
```

- *Type:* java.lang.String

---

##### `hcxOnPremKey`<sup>Required</sup> <a name="hcxOnPremKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxOnPremKey"></a>

```java
public java.lang.String getHcxOnPremKey();
```

- *Type:* java.lang.String

---

##### `hcxOnPremLicenses`<sup>Required</sup> <a name="hcxOnPremLicenses" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxOnPremLicenses"></a>

```java
public DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList getHcxOnPremLicenses();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList">DataOciOcvpSddcsSddcCollectionHcxOnPremLicensesList</a>

---

##### `hcxPrivateIpId`<sup>Required</sup> <a name="hcxPrivateIpId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxPrivateIpId"></a>

```java
public java.lang.String getHcxPrivateIpId();
```

- *Type:* java.lang.String

---

##### `hcxVlanId`<sup>Required</sup> <a name="hcxVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.hcxVlanId"></a>

```java
public java.lang.String getHcxVlanId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `initialConfiguration`<sup>Required</sup> <a name="initialConfiguration" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialConfiguration"></a>

```java
public DataOciOcvpSddcsSddcCollectionInitialConfigurationList getInitialConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionInitialConfigurationList">DataOciOcvpSddcsSddcCollectionInitialConfigurationList</a>

---

##### `initialHostOcpuCount`<sup>Required</sup> <a name="initialHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialHostOcpuCount"></a>

```java
public java.lang.Number getInitialHostOcpuCount();
```

- *Type:* java.lang.Number

---

##### `initialHostShapeName`<sup>Required</sup> <a name="initialHostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialHostShapeName"></a>

```java
public java.lang.String getInitialHostShapeName();
```

- *Type:* java.lang.String

---

##### `initialSku`<sup>Required</sup> <a name="initialSku" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.initialSku"></a>

```java
public java.lang.String getInitialSku();
```

- *Type:* java.lang.String

---

##### `instanceDisplayNamePrefix`<sup>Required</sup> <a name="instanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.instanceDisplayNamePrefix"></a>

```java
public java.lang.String getInstanceDisplayNamePrefix();
```

- *Type:* java.lang.String

---

##### `isHcxEnabled`<sup>Required</sup> <a name="isHcxEnabled" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isHcxEnabled"></a>

```java
public IResolvable getIsHcxEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isHcxEnterpriseEnabled`<sup>Required</sup> <a name="isHcxEnterpriseEnabled" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isHcxEnterpriseEnabled"></a>

```java
public IResolvable getIsHcxEnterpriseEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isHcxPendingDowngrade`<sup>Required</sup> <a name="isHcxPendingDowngrade" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isHcxPendingDowngrade"></a>

```java
public IResolvable getIsHcxPendingDowngrade();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isShieldedInstanceEnabled`<sup>Required</sup> <a name="isShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isShieldedInstanceEnabled"></a>

```java
public IResolvable getIsShieldedInstanceEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isSingleHostSddc`<sup>Required</sup> <a name="isSingleHostSddc" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.isSingleHostSddc"></a>

```java
public IResolvable getIsSingleHostSddc();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `nsxEdgeUplink1VlanId`<sup>Required</sup> <a name="nsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeUplink1VlanId"></a>

```java
public java.lang.String getNsxEdgeUplink1VlanId();
```

- *Type:* java.lang.String

---

##### `nsxEdgeUplink2VlanId`<sup>Required</sup> <a name="nsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeUplink2VlanId"></a>

```java
public java.lang.String getNsxEdgeUplink2VlanId();
```

- *Type:* java.lang.String

---

##### `nsxEdgeUplinkIpId`<sup>Required</sup> <a name="nsxEdgeUplinkIpId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeUplinkIpId"></a>

```java
public java.lang.String getNsxEdgeUplinkIpId();
```

- *Type:* java.lang.String

---

##### `nsxEdgeVtepVlanId`<sup>Required</sup> <a name="nsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxEdgeVtepVlanId"></a>

```java
public java.lang.String getNsxEdgeVtepVlanId();
```

- *Type:* java.lang.String

---

##### `nsxManagerFqdn`<sup>Required</sup> <a name="nsxManagerFqdn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerFqdn"></a>

```java
public java.lang.String getNsxManagerFqdn();
```

- *Type:* java.lang.String

---

##### `nsxManagerInitialPassword`<sup>Required</sup> <a name="nsxManagerInitialPassword" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerInitialPassword"></a>

```java
public java.lang.String getNsxManagerInitialPassword();
```

- *Type:* java.lang.String

---

##### `nsxManagerPrivateIpId`<sup>Required</sup> <a name="nsxManagerPrivateIpId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerPrivateIpId"></a>

```java
public java.lang.String getNsxManagerPrivateIpId();
```

- *Type:* java.lang.String

---

##### `nsxManagerUsername`<sup>Required</sup> <a name="nsxManagerUsername" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxManagerUsername"></a>

```java
public java.lang.String getNsxManagerUsername();
```

- *Type:* java.lang.String

---

##### `nsxOverlaySegmentName`<sup>Required</sup> <a name="nsxOverlaySegmentName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxOverlaySegmentName"></a>

```java
public java.lang.String getNsxOverlaySegmentName();
```

- *Type:* java.lang.String

---

##### `nsxVtepVlanId`<sup>Required</sup> <a name="nsxVtepVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.nsxVtepVlanId"></a>

```java
public java.lang.String getNsxVtepVlanId();
```

- *Type:* java.lang.String

---

##### `provisioningSubnetId`<sup>Required</sup> <a name="provisioningSubnetId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.provisioningSubnetId"></a>

```java
public java.lang.String getProvisioningSubnetId();
```

- *Type:* java.lang.String

---

##### `provisioningVlanId`<sup>Required</sup> <a name="provisioningVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.provisioningVlanId"></a>

```java
public java.lang.String getProvisioningVlanId();
```

- *Type:* java.lang.String

---

##### `refreshHcxLicenseStatus`<sup>Required</sup> <a name="refreshHcxLicenseStatus" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.refreshHcxLicenseStatus"></a>

```java
public IResolvable getRefreshHcxLicenseStatus();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `replicationVlanId`<sup>Required</sup> <a name="replicationVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.replicationVlanId"></a>

```java
public java.lang.String getReplicationVlanId();
```

- *Type:* java.lang.String

---

##### `reservingHcxOnPremiseLicenseKeys`<sup>Required</sup> <a name="reservingHcxOnPremiseLicenseKeys" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.reservingHcxOnPremiseLicenseKeys"></a>

```java
public java.util.List<java.lang.String> getReservingHcxOnPremiseLicenseKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sshAuthorizedKeys`<sup>Required</sup> <a name="sshAuthorizedKeys" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.sshAuthorizedKeys"></a>

```java
public java.lang.String getSshAuthorizedKeys();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeHcxBillingCycleEnd`<sup>Required</sup> <a name="timeHcxBillingCycleEnd" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeHcxBillingCycleEnd"></a>

```java
public java.lang.String getTimeHcxBillingCycleEnd();
```

- *Type:* java.lang.String

---

##### `timeHcxLicenseStatusUpdated`<sup>Required</sup> <a name="timeHcxLicenseStatusUpdated" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeHcxLicenseStatusUpdated"></a>

```java
public java.lang.String getTimeHcxLicenseStatusUpdated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `upgradeLicenses`<sup>Required</sup> <a name="upgradeLicenses" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.upgradeLicenses"></a>

```java
public DataOciOcvpSddcsSddcCollectionUpgradeLicensesList getUpgradeLicenses();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList">DataOciOcvpSddcsSddcCollectionUpgradeLicensesList</a>

---

##### `vcenterFqdn`<sup>Required</sup> <a name="vcenterFqdn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterFqdn"></a>

```java
public java.lang.String getVcenterFqdn();
```

- *Type:* java.lang.String

---

##### `vcenterInitialPassword`<sup>Required</sup> <a name="vcenterInitialPassword" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterInitialPassword"></a>

```java
public java.lang.String getVcenterInitialPassword();
```

- *Type:* java.lang.String

---

##### `vcenterPrivateIpId`<sup>Required</sup> <a name="vcenterPrivateIpId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterPrivateIpId"></a>

```java
public java.lang.String getVcenterPrivateIpId();
```

- *Type:* java.lang.String

---

##### `vcenterUsername`<sup>Required</sup> <a name="vcenterUsername" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vcenterUsername"></a>

```java
public java.lang.String getVcenterUsername();
```

- *Type:* java.lang.String

---

##### `vmotionVlanId`<sup>Required</sup> <a name="vmotionVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vmotionVlanId"></a>

```java
public java.lang.String getVmotionVlanId();
```

- *Type:* java.lang.String

---

##### `vmwareSoftwareVersion`<sup>Required</sup> <a name="vmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vmwareSoftwareVersion"></a>

```java
public java.lang.String getVmwareSoftwareVersion();
```

- *Type:* java.lang.String

---

##### `vsanVlanId`<sup>Required</sup> <a name="vsanVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsanVlanId"></a>

```java
public java.lang.String getVsanVlanId();
```

- *Type:* java.lang.String

---

##### `vsphereUpgradeGuide`<sup>Required</sup> <a name="vsphereUpgradeGuide" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsphereUpgradeGuide"></a>

```java
public java.lang.String getVsphereUpgradeGuide();
```

- *Type:* java.lang.String

---

##### `vsphereUpgradeObjects`<sup>Required</sup> <a name="vsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsphereUpgradeObjects"></a>

```java
public DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList getVsphereUpgradeObjects();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList">DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList</a>

---

##### `vsphereVlanId`<sup>Required</sup> <a name="vsphereVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.vsphereVlanId"></a>

```java
public java.lang.String getVsphereVlanId();
```

- *Type:* java.lang.String

---

##### `workloadNetworkCidr`<sup>Required</sup> <a name="workloadNetworkCidr" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.workloadNetworkCidr"></a>

```java
public java.lang.String getWorkloadNetworkCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionOutputReference.property.internalValue"></a>

```java
public DataOciOcvpSddcsSddcCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollection">DataOciOcvpSddcsSddcCollection</a>

---


### DataOciOcvpSddcsSddcCollectionUpgradeLicensesList <a name="DataOciOcvpSddcsSddcCollectionUpgradeLicensesList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList;

new DataOciOcvpSddcsSddcCollectionUpgradeLicensesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.get"></a>

```java
public DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference <a name="DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference;

new DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.licenseKey">licenseKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.licenseType">licenseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicenses">DataOciOcvpSddcsSddcCollectionUpgradeLicenses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `licenseKey`<sup>Required</sup> <a name="licenseKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.licenseKey"></a>

```java
public java.lang.String getLicenseKey();
```

- *Type:* java.lang.String

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.licenseType"></a>

```java
public java.lang.String getLicenseType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicensesOutputReference.property.internalValue"></a>

```java
public DataOciOcvpSddcsSddcCollectionUpgradeLicenses getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionUpgradeLicenses">DataOciOcvpSddcsSddcCollectionUpgradeLicenses</a>

---


### DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList <a name="DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList;

new DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.get"></a>

```java
public DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference <a name="DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_ocvp_sddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference;

new DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.downloadLink">downloadLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.linkDescription">linkDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects">DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `downloadLink`<sup>Required</sup> <a name="downloadLink" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.downloadLink"></a>

```java
public java.lang.String getDownloadLink();
```

- *Type:* java.lang.String

---

##### `linkDescription`<sup>Required</sup> <a name="linkDescription" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.linkDescription"></a>

```java
public java.lang.String getLinkDescription();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjectsOutputReference.property.internalValue"></a>

```java
public DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddcs.DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects">DataOciOcvpSddcsSddcCollectionVsphereUpgradeObjects</a>

---



