# `dataOciObjectstoragePrivateEndpointSummaries` Submodule <a name="`dataOciObjectstoragePrivateEndpointSummaries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciObjectstoragePrivateEndpointSummaries <a name="DataOciObjectstoragePrivateEndpointSummaries" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries oci_objectstorage_private_endpoint_summaries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_private_endpoint_summaries.DataOciObjectstoragePrivateEndpointSummaries;

DataOciObjectstoragePrivateEndpointSummaries.Builder.create(Construct scope, java.lang.String id)
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
    .namespace(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciObjectstoragePrivateEndpointSummariesFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#compartment_id DataOciObjectstoragePrivateEndpointSummaries#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#namespace DataOciObjectstoragePrivateEndpointSummaries#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter">DataOciObjectstoragePrivateEndpointSummariesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#id DataOciObjectstoragePrivateEndpointSummaries#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#compartment_id DataOciObjectstoragePrivateEndpointSummaries#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#namespace DataOciObjectstoragePrivateEndpointSummaries#namespace}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter">DataOciObjectstoragePrivateEndpointSummariesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#filter DataOciObjectstoragePrivateEndpointSummaries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#id DataOciObjectstoragePrivateEndpointSummaries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciObjectstoragePrivateEndpointSummariesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter">DataOciObjectstoragePrivateEndpointSummariesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciObjectstoragePrivateEndpointSummaries resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_private_endpoint_summaries.DataOciObjectstoragePrivateEndpointSummaries;

DataOciObjectstoragePrivateEndpointSummaries.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_private_endpoint_summaries.DataOciObjectstoragePrivateEndpointSummaries;

DataOciObjectstoragePrivateEndpointSummaries.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_private_endpoint_summaries.DataOciObjectstoragePrivateEndpointSummaries;

DataOciObjectstoragePrivateEndpointSummaries.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_private_endpoint_summaries.DataOciObjectstoragePrivateEndpointSummaries;

DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciObjectstoragePrivateEndpointSummaries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciObjectstoragePrivateEndpointSummaries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciObjectstoragePrivateEndpointSummaries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciObjectstoragePrivateEndpointSummaries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList">DataOciObjectstoragePrivateEndpointSummariesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.privateEndpointSummaries">privateEndpointSummaries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter">DataOciObjectstoragePrivateEndpointSummariesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.filter"></a>

```java
public DataOciObjectstoragePrivateEndpointSummariesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList">DataOciObjectstoragePrivateEndpointSummariesFilterList</a>

---

##### `privateEndpointSummaries`<sup>Required</sup> <a name="privateEndpointSummaries" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.privateEndpointSummaries"></a>

```java
public DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList getPrivateEndpointSummaries();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter">DataOciObjectstoragePrivateEndpointSummariesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummaries.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciObjectstoragePrivateEndpointSummariesConfig <a name="DataOciObjectstoragePrivateEndpointSummariesConfig" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_private_endpoint_summaries.DataOciObjectstoragePrivateEndpointSummariesConfig;

DataOciObjectstoragePrivateEndpointSummariesConfig.builder()
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
    .namespace(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciObjectstoragePrivateEndpointSummariesFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#compartment_id DataOciObjectstoragePrivateEndpointSummaries#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#namespace DataOciObjectstoragePrivateEndpointSummaries#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter">DataOciObjectstoragePrivateEndpointSummariesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#id DataOciObjectstoragePrivateEndpointSummaries#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#compartment_id DataOciObjectstoragePrivateEndpointSummaries#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#namespace DataOciObjectstoragePrivateEndpointSummaries#namespace}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter">DataOciObjectstoragePrivateEndpointSummariesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#filter DataOciObjectstoragePrivateEndpointSummaries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#id DataOciObjectstoragePrivateEndpointSummaries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciObjectstoragePrivateEndpointSummariesFilter <a name="DataOciObjectstoragePrivateEndpointSummariesFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_private_endpoint_summaries.DataOciObjectstoragePrivateEndpointSummariesFilter;

DataOciObjectstoragePrivateEndpointSummariesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#name DataOciObjectstoragePrivateEndpointSummaries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#values DataOciObjectstoragePrivateEndpointSummaries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#regex DataOciObjectstoragePrivateEndpointSummaries#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#name DataOciObjectstoragePrivateEndpointSummaries#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#values DataOciObjectstoragePrivateEndpointSummaries#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_private_endpoint_summaries#regex DataOciObjectstoragePrivateEndpointSummaries#regex}.

---

### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_private_endpoint_summaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries;

DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries.builder()
    .build();
```


### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_private_endpoint_summaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets;

DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciObjectstoragePrivateEndpointSummariesFilterList <a name="DataOciObjectstoragePrivateEndpointSummariesFilterList" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_private_endpoint_summaries.DataOciObjectstoragePrivateEndpointSummariesFilterList;

new DataOciObjectstoragePrivateEndpointSummariesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.get"></a>

```java
public DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter">DataOciObjectstoragePrivateEndpointSummariesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter">DataOciObjectstoragePrivateEndpointSummariesFilter</a>>

---


### DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference <a name="DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_private_endpoint_summaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference;

new DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter">DataOciObjectstoragePrivateEndpointSummariesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesFilter">DataOciObjectstoragePrivateEndpointSummariesFilter</a>

---


### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_private_endpoint_summaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList;

new DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.get"></a>

```java
public DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_private_endpoint_summaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference;

new DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsOutputReference.property.internalValue"></a>

```java
public DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargets</a>

---


### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_private_endpoint_summaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList;

new DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.get"></a>

```java
public DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference <a name="DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_private_endpoint_summaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference;

new DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.accessTargets">accessTargets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.additionalPrefixes">additionalPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.fqdns">fqdns</a></code> | <code>com.hashicorp.cdktf.AnyMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.privateEndpointIp">privateEndpointIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.timeModified">timeModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessTargets`<sup>Required</sup> <a name="accessTargets" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.accessTargets"></a>

```java
public DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList getAccessTargets();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesAccessTargetsList</a>

---

##### `additionalPrefixes`<sup>Required</sup> <a name="additionalPrefixes" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.additionalPrefixes"></a>

```java
public java.util.List<java.lang.String> getAdditionalPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `fqdns`<sup>Required</sup> <a name="fqdns" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.fqdns"></a>

```java
public AnyMap getFqdns();
```

- *Type:* com.hashicorp.cdktf.AnyMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `privateEndpointIp`<sup>Required</sup> <a name="privateEndpointIp" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.privateEndpointIp"></a>

```java
public java.lang.String getPrivateEndpointIp();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeModified`<sup>Required</sup> <a name="timeModified" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.timeModified"></a>

```java
public java.lang.String getTimeModified();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummariesOutputReference.property.internalValue"></a>

```java
public DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePrivateEndpointSummaries.DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries">DataOciObjectstoragePrivateEndpointSummariesPrivateEndpointSummaries</a>

---



