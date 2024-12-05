# `dataOciOdaOdaPrivateEndpoints` Submodule <a name="`dataOciOdaOdaPrivateEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOdaOdaPrivateEndpoints <a name="DataOciOdaOdaPrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints oci_oda_oda_private_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_oda_oda_private_endpoints.DataOciOdaOdaPrivateEndpoints;

DataOciOdaOdaPrivateEndpoints.Builder.create(Construct scope, java.lang.String id)
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
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOdaOdaPrivateEndpointsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#compartment_id DataOciOdaOdaPrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#display_name DataOciOdaOdaPrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter">DataOciOdaOdaPrivateEndpointsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#id DataOciOdaOdaPrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#state DataOciOdaOdaPrivateEndpoints#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#compartment_id DataOciOdaOdaPrivateEndpoints#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#display_name DataOciOdaOdaPrivateEndpoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter">DataOciOdaOdaPrivateEndpointsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#filter DataOciOdaOdaPrivateEndpoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#id DataOciOdaOdaPrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#state DataOciOdaOdaPrivateEndpoints#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciOdaOdaPrivateEndpointsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter">DataOciOdaOdaPrivateEndpointsFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOdaOdaPrivateEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_oda_oda_private_endpoints.DataOciOdaOdaPrivateEndpoints;

DataOciOdaOdaPrivateEndpoints.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_oda_oda_private_endpoints.DataOciOdaOdaPrivateEndpoints;

DataOciOdaOdaPrivateEndpoints.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_oda_oda_private_endpoints.DataOciOdaOdaPrivateEndpoints;

DataOciOdaOdaPrivateEndpoints.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_oda_oda_private_endpoints.DataOciOdaOdaPrivateEndpoints;

DataOciOdaOdaPrivateEndpoints.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOdaOdaPrivateEndpoints.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOdaOdaPrivateEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOdaOdaPrivateEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOdaOdaPrivateEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOdaOdaPrivateEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList">DataOciOdaOdaPrivateEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.odaPrivateEndpointCollection">odaPrivateEndpointCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter">DataOciOdaOdaPrivateEndpointsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.filter"></a>

```java
public DataOciOdaOdaPrivateEndpointsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList">DataOciOdaOdaPrivateEndpointsFilterList</a>

---

##### `odaPrivateEndpointCollection`<sup>Required</sup> <a name="odaPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.odaPrivateEndpointCollection"></a>

```java
public DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList getOdaPrivateEndpointCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter">DataOciOdaOdaPrivateEndpointsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpoints.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOdaOdaPrivateEndpointsConfig <a name="DataOciOdaOdaPrivateEndpointsConfig" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_oda_oda_private_endpoints.DataOciOdaOdaPrivateEndpointsConfig;

DataOciOdaOdaPrivateEndpointsConfig.builder()
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
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOdaOdaPrivateEndpointsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#compartment_id DataOciOdaOdaPrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#display_name DataOciOdaOdaPrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter">DataOciOdaOdaPrivateEndpointsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#id DataOciOdaOdaPrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#state DataOciOdaOdaPrivateEndpoints#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#compartment_id DataOciOdaOdaPrivateEndpoints#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#display_name DataOciOdaOdaPrivateEndpoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter">DataOciOdaOdaPrivateEndpointsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#filter DataOciOdaOdaPrivateEndpoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#id DataOciOdaOdaPrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#state DataOciOdaOdaPrivateEndpoints#state}.

---

### DataOciOdaOdaPrivateEndpointsFilter <a name="DataOciOdaOdaPrivateEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_oda_oda_private_endpoints.DataOciOdaOdaPrivateEndpointsFilter;

DataOciOdaOdaPrivateEndpointsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#name DataOciOdaOdaPrivateEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#values DataOciOdaOdaPrivateEndpoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#regex DataOciOdaOdaPrivateEndpoints#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#name DataOciOdaOdaPrivateEndpoints#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#values DataOciOdaOdaPrivateEndpoints#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_private_endpoints#regex DataOciOdaOdaPrivateEndpoints#regex}.

---

### DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection <a name="DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_oda_oda_private_endpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection;

DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection.builder()
    .build();
```


### DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems <a name="DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_oda_oda_private_endpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems;

DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOdaOdaPrivateEndpointsFilterList <a name="DataOciOdaOdaPrivateEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_oda_oda_private_endpoints.DataOciOdaOdaPrivateEndpointsFilterList;

new DataOciOdaOdaPrivateEndpointsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.get"></a>

```java
public DataOciOdaOdaPrivateEndpointsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter">DataOciOdaOdaPrivateEndpointsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter">DataOciOdaOdaPrivateEndpointsFilter</a>>

---


### DataOciOdaOdaPrivateEndpointsFilterOutputReference <a name="DataOciOdaOdaPrivateEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_oda_oda_private_endpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference;

new DataOciOdaOdaPrivateEndpointsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter">DataOciOdaOdaPrivateEndpointsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsFilter">DataOciOdaOdaPrivateEndpointsFilter</a>

---


### DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList <a name="DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_oda_oda_private_endpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList;

new DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.get"></a>

```java
public DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference <a name="DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_oda_oda_private_endpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference;

new DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItems</a>

---


### DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList <a name="DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_oda_oda_private_endpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList;

new DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.get"></a>

```java
public DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference <a name="DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_oda_oda_private_endpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference;

new DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.items"></a>

```java
public DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollectionOutputReference.property.internalValue"></a>

```java
public DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaPrivateEndpoints.DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection">DataOciOdaOdaPrivateEndpointsOdaPrivateEndpointCollection</a>

---



