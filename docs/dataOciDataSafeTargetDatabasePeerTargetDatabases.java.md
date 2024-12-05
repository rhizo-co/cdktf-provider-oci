# `dataOciDataSafeTargetDatabasePeerTargetDatabases` Submodule <a name="`dataOciDataSafeTargetDatabasePeerTargetDatabases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeTargetDatabasePeerTargetDatabasesA <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesA" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases oci_data_safe_target_database_peer_target_databases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_database_peer_target_databases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA;

DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Builder.create(Construct scope, java.lang.String id)
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
    .targetDatabaseId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.targetDatabaseId">targetDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#target_database_id DataOciDataSafeTargetDatabasePeerTargetDatabasesA#target_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#id DataOciDataSafeTargetDatabasePeerTargetDatabasesA#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `targetDatabaseId`<sup>Required</sup> <a name="targetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.targetDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#target_database_id DataOciDataSafeTargetDatabasePeerTargetDatabasesA#target_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#filter DataOciDataSafeTargetDatabasePeerTargetDatabasesA#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#id DataOciDataSafeTargetDatabasePeerTargetDatabasesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeTargetDatabasePeerTargetDatabasesA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_database_peer_target_databases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA;

DataOciDataSafeTargetDatabasePeerTargetDatabasesA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_database_peer_target_databases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA;

DataOciDataSafeTargetDatabasePeerTargetDatabasesA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_database_peer_target_databases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA;

DataOciDataSafeTargetDatabasePeerTargetDatabasesA.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_database_peer_target_databases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA;

DataOciDataSafeTargetDatabasePeerTargetDatabasesA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDataSafeTargetDatabasePeerTargetDatabasesA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDataSafeTargetDatabasePeerTargetDatabasesA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDataSafeTargetDatabasePeerTargetDatabasesA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDataSafeTargetDatabasePeerTargetDatabasesA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeTargetDatabasePeerTargetDatabasesA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.peerTargetDatabaseCollection">peerTargetDatabaseCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.targetDatabaseIdInput">targetDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.targetDatabaseId">targetDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.filter"></a>

```java
public DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList</a>

---

##### `peerTargetDatabaseCollection`<sup>Required</sup> <a name="peerTargetDatabaseCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.peerTargetDatabaseCollection"></a>

```java
public DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList getPeerTargetDatabaseCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `targetDatabaseIdInput`<sup>Optional</sup> <a name="targetDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.targetDatabaseIdInput"></a>

```java
public java.lang.String getTargetDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `targetDatabaseId`<sup>Required</sup> <a name="targetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.targetDatabaseId"></a>

```java
public java.lang.String getTargetDatabaseId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_database_peer_target_databases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig;

DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.builder()
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
    .targetDatabaseId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.targetDatabaseId">targetDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#target_database_id DataOciDataSafeTargetDatabasePeerTargetDatabasesA#target_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#id DataOciDataSafeTargetDatabasePeerTargetDatabasesA#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `targetDatabaseId`<sup>Required</sup> <a name="targetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.targetDatabaseId"></a>

```java
public java.lang.String getTargetDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#target_database_id DataOciDataSafeTargetDatabasePeerTargetDatabasesA#target_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#filter DataOciDataSafeTargetDatabasePeerTargetDatabasesA#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#id DataOciDataSafeTargetDatabasePeerTargetDatabasesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_database_peer_target_databases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter;

DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#name DataOciDataSafeTargetDatabasePeerTargetDatabasesA#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#values DataOciDataSafeTargetDatabasePeerTargetDatabasesA#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#regex DataOciDataSafeTargetDatabasePeerTargetDatabasesA#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#name DataOciDataSafeTargetDatabasePeerTargetDatabasesA#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#values DataOciDataSafeTargetDatabasePeerTargetDatabasesA#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_peer_target_databases#regex DataOciDataSafeTargetDatabasePeerTargetDatabasesA#regex}.

---

### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollection <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_database_peer_target_databases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollection;

DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollection.builder()
    .build();
```


### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItems <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_database_peer_target_databases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItems;

DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItems.builder()
    .build();
```


### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetails <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_database_peer_target_databases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetails;

DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetails.builder()
    .build();
```


### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfig <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_database_peer_target_databases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfig;

DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfig.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_database_peer_target_databases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList;

new DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.get"></a>

```java
public DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter</a>>

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_database_peer_target_databases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference;

new DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter">DataOciDataSafeTargetDatabasePeerTargetDatabasesFilter</a>

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_database_peer_target_databases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList;

new DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.get"></a>

```java
public DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_database_peer_target_databases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference;

new DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.databaseType">databaseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.infrastructureType">infrastructureType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.listenerPort">listenerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.vmClusterId">vmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetails">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.autonomousDatabaseId"></a>

```java
public java.lang.String getAutonomousDatabaseId();
```

- *Type:* java.lang.String

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.databaseType"></a>

```java
public java.lang.String getDatabaseType();
```

- *Type:* java.lang.String

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

---

##### `infrastructureType`<sup>Required</sup> <a name="infrastructureType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.infrastructureType"></a>

```java
public java.lang.String getInfrastructureType();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.listenerPort"></a>

```java
public java.lang.Number getListenerPort();
```

- *Type:* java.lang.Number

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `vmClusterId`<sup>Required</sup> <a name="vmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.vmClusterId"></a>

```java
public java.lang.String getVmClusterId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetails">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetails</a>

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_database_peer_target_databases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList;

new DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.get"></a>

```java
public DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_database_peer_target_databases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference;

new DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.databaseDetails">databaseDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.databaseUniqueName">databaseUniqueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.dataguardAssociationId">dataguardAssociationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.key">key</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.targetDatabaseId">targetDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.tlsConfig">tlsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItems">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseDetails`<sup>Required</sup> <a name="databaseDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.databaseDetails"></a>

```java
public DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList getDatabaseDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsDatabaseDetailsList</a>

---

##### `databaseUniqueName`<sup>Required</sup> <a name="databaseUniqueName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.databaseUniqueName"></a>

```java
public java.lang.String getDatabaseUniqueName();
```

- *Type:* java.lang.String

---

##### `dataguardAssociationId`<sup>Required</sup> <a name="dataguardAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.dataguardAssociationId"></a>

```java
public java.lang.String getDataguardAssociationId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.key"></a>

```java
public java.lang.Number getKey();
```

- *Type:* java.lang.Number

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `targetDatabaseId`<sup>Required</sup> <a name="targetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.targetDatabaseId"></a>

```java
public java.lang.String getTargetDatabaseId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.tlsConfig"></a>

```java
public DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList getTlsConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItems">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItems</a>

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_database_peer_target_databases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList;

new DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.get"></a>

```java
public DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_database_peer_target_databases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference;

new DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.certificateStoreType">certificateStoreType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.keyStoreContent">keyStoreContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.storePassword">storePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.trustStoreContent">trustStoreContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfig">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateStoreType`<sup>Required</sup> <a name="certificateStoreType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.certificateStoreType"></a>

```java
public java.lang.String getCertificateStoreType();
```

- *Type:* java.lang.String

---

##### `keyStoreContent`<sup>Required</sup> <a name="keyStoreContent" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.keyStoreContent"></a>

```java
public java.lang.String getKeyStoreContent();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `storePassword`<sup>Required</sup> <a name="storePassword" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.storePassword"></a>

```java
public java.lang.String getStorePassword();
```

- *Type:* java.lang.String

---

##### `trustStoreContent`<sup>Required</sup> <a name="trustStoreContent" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.trustStoreContent"></a>

```java
public java.lang.String getTrustStoreContent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfigOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfig">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsTlsConfig</a>

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_database_peer_target_databases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList;

new DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.get"></a>

```java
public DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference <a name="DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_target_database_peer_target_databases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference;

new DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollection">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.property.items"></a>

```java
public DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabasePeerTargetDatabases.DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollection">DataOciDataSafeTargetDatabasePeerTargetDatabasesPeerTargetDatabaseCollection</a>

---



