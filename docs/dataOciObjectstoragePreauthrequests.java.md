# `dataOciObjectstoragePreauthrequests` Submodule <a name="`dataOciObjectstoragePreauthrequests` Submodule" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciObjectstoragePreauthrequests <a name="DataOciObjectstoragePreauthrequests" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests oci_objectstorage_preauthrequests}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_preauthrequests.DataOciObjectstoragePreauthrequests;

DataOciObjectstoragePreauthrequests.Builder.create(Construct scope, java.lang.String id)
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
    .bucket(java.lang.String)
    .namespace(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciObjectstoragePreauthrequestsFilter>)
//  .id(java.lang.String)
//  .objectNamePrefix(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#bucket DataOciObjectstoragePreauthrequests#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#namespace DataOciObjectstoragePreauthrequests#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter">DataOciObjectstoragePreauthrequestsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#id DataOciObjectstoragePreauthrequests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.objectNamePrefix">objectNamePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#object_name_prefix DataOciObjectstoragePreauthrequests#object_name_prefix}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#bucket DataOciObjectstoragePreauthrequests#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#namespace DataOciObjectstoragePreauthrequests#namespace}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter">DataOciObjectstoragePreauthrequestsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#filter DataOciObjectstoragePreauthrequests#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#id DataOciObjectstoragePreauthrequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objectNamePrefix`<sup>Optional</sup> <a name="objectNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.Initializer.parameter.objectNamePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#object_name_prefix DataOciObjectstoragePreauthrequests#object_name_prefix}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetObjectNamePrefix">resetObjectNamePrefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciObjectstoragePreauthrequestsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter">DataOciObjectstoragePreauthrequestsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetId"></a>

```java
public void resetId()
```

##### `resetObjectNamePrefix` <a name="resetObjectNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.resetObjectNamePrefix"></a>

```java
public void resetObjectNamePrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciObjectstoragePreauthrequests resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_preauthrequests.DataOciObjectstoragePreauthrequests;

DataOciObjectstoragePreauthrequests.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_preauthrequests.DataOciObjectstoragePreauthrequests;

DataOciObjectstoragePreauthrequests.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_preauthrequests.DataOciObjectstoragePreauthrequests;

DataOciObjectstoragePreauthrequests.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_preauthrequests.DataOciObjectstoragePreauthrequests;

DataOciObjectstoragePreauthrequests.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciObjectstoragePreauthrequests.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciObjectstoragePreauthrequests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciObjectstoragePreauthrequests to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciObjectstoragePreauthrequests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciObjectstoragePreauthrequests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList">DataOciObjectstoragePreauthrequestsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.preauthenticatedRequests">preauthenticatedRequests</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList">DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter">DataOciObjectstoragePreauthrequestsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.objectNamePrefixInput">objectNamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.objectNamePrefix">objectNamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.filter"></a>

```java
public DataOciObjectstoragePreauthrequestsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList">DataOciObjectstoragePreauthrequestsFilterList</a>

---

##### `preauthenticatedRequests`<sup>Required</sup> <a name="preauthenticatedRequests" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.preauthenticatedRequests"></a>

```java
public DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList getPreauthenticatedRequests();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList">DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter">DataOciObjectstoragePreauthrequestsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `objectNamePrefixInput`<sup>Optional</sup> <a name="objectNamePrefixInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.objectNamePrefixInput"></a>

```java
public java.lang.String getObjectNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `objectNamePrefix`<sup>Required</sup> <a name="objectNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.objectNamePrefix"></a>

```java
public java.lang.String getObjectNamePrefix();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequests.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciObjectstoragePreauthrequestsConfig <a name="DataOciObjectstoragePreauthrequestsConfig" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_preauthrequests.DataOciObjectstoragePreauthrequestsConfig;

DataOciObjectstoragePreauthrequestsConfig.builder()
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
    .bucket(java.lang.String)
    .namespace(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciObjectstoragePreauthrequestsFilter>)
//  .id(java.lang.String)
//  .objectNamePrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#bucket DataOciObjectstoragePreauthrequests#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#namespace DataOciObjectstoragePreauthrequests#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter">DataOciObjectstoragePreauthrequestsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#id DataOciObjectstoragePreauthrequests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.objectNamePrefix">objectNamePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#object_name_prefix DataOciObjectstoragePreauthrequests#object_name_prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#bucket DataOciObjectstoragePreauthrequests#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#namespace DataOciObjectstoragePreauthrequests#namespace}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter">DataOciObjectstoragePreauthrequestsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#filter DataOciObjectstoragePreauthrequests#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#id DataOciObjectstoragePreauthrequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objectNamePrefix`<sup>Optional</sup> <a name="objectNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsConfig.property.objectNamePrefix"></a>

```java
public java.lang.String getObjectNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#object_name_prefix DataOciObjectstoragePreauthrequests#object_name_prefix}.

---

### DataOciObjectstoragePreauthrequestsFilter <a name="DataOciObjectstoragePreauthrequestsFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_preauthrequests.DataOciObjectstoragePreauthrequestsFilter;

DataOciObjectstoragePreauthrequestsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#name DataOciObjectstoragePreauthrequests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#values DataOciObjectstoragePreauthrequests#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#regex DataOciObjectstoragePreauthrequests#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#name DataOciObjectstoragePreauthrequests#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#values DataOciObjectstoragePreauthrequests#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_preauthrequests#regex DataOciObjectstoragePreauthrequests#regex}.

---

### DataOciObjectstoragePreauthrequestsPreauthenticatedRequests <a name="DataOciObjectstoragePreauthrequestsPreauthenticatedRequests" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequests"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequests.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_preauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequests;

DataOciObjectstoragePreauthrequestsPreauthenticatedRequests.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciObjectstoragePreauthrequestsFilterList <a name="DataOciObjectstoragePreauthrequestsFilterList" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_preauthrequests.DataOciObjectstoragePreauthrequestsFilterList;

new DataOciObjectstoragePreauthrequestsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.get"></a>

```java
public DataOciObjectstoragePreauthrequestsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter">DataOciObjectstoragePreauthrequestsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter">DataOciObjectstoragePreauthrequestsFilter</a>>

---


### DataOciObjectstoragePreauthrequestsFilterOutputReference <a name="DataOciObjectstoragePreauthrequestsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_preauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference;

new DataOciObjectstoragePreauthrequestsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter">DataOciObjectstoragePreauthrequestsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsFilter">DataOciObjectstoragePreauthrequestsFilter</a>

---


### DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList <a name="DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_preauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList;

new DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.get"></a>

```java
public DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference <a name="DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_preauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference;

new DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.accessType">accessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.accessUri">accessUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.bucketListingAction">bucketListingAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.fullPath">fullPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.objectName">objectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.parId">parId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.timeExpires">timeExpires</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequests">DataOciObjectstoragePreauthrequestsPreauthenticatedRequests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.accessType"></a>

```java
public java.lang.String getAccessType();
```

- *Type:* java.lang.String

---

##### `accessUri`<sup>Required</sup> <a name="accessUri" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.accessUri"></a>

```java
public java.lang.String getAccessUri();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `bucketListingAction`<sup>Required</sup> <a name="bucketListingAction" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.bucketListingAction"></a>

```java
public java.lang.String getBucketListingAction();
```

- *Type:* java.lang.String

---

##### `fullPath`<sup>Required</sup> <a name="fullPath" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.fullPath"></a>

```java
public java.lang.String getFullPath();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.objectName"></a>

```java
public java.lang.String getObjectName();
```

- *Type:* java.lang.String

---

##### `parId`<sup>Required</sup> <a name="parId" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.parId"></a>

```java
public java.lang.String getParId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeExpires`<sup>Required</sup> <a name="timeExpires" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.timeExpires"></a>

```java
public java.lang.String getTimeExpires();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequestsOutputReference.property.internalValue"></a>

```java
public DataOciObjectstoragePreauthrequestsPreauthenticatedRequests getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstoragePreauthrequests.DataOciObjectstoragePreauthrequestsPreauthenticatedRequests">DataOciObjectstoragePreauthrequestsPreauthenticatedRequests</a>

---



