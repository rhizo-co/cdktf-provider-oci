# `dataOciDatabaseAutonomousDatabaseRefreshableClones` Submodule <a name="`dataOciDatabaseAutonomousDatabaseRefreshableClones` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabaseRefreshableClones <a name="DataOciDatabaseAutonomousDatabaseRefreshableClones" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones oci_database_autonomous_database_refreshable_clones}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_refreshable_clones.DataOciDatabaseAutonomousDatabaseRefreshableClones;

DataOciDatabaseAutonomousDatabaseRefreshableClones.Builder.create(Construct scope, java.lang.String id)
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
    .autonomousDatabaseId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#autonomous_database_id DataOciDatabaseAutonomousDatabaseRefreshableClones#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#id DataOciDatabaseAutonomousDatabaseRefreshableClones#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.autonomousDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#autonomous_database_id DataOciDatabaseAutonomousDatabaseRefreshableClones#autonomous_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#filter DataOciDatabaseAutonomousDatabaseRefreshableClones#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#id DataOciDatabaseAutonomousDatabaseRefreshableClones#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseRefreshableClones resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_refreshable_clones.DataOciDatabaseAutonomousDatabaseRefreshableClones;

DataOciDatabaseAutonomousDatabaseRefreshableClones.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_refreshable_clones.DataOciDatabaseAutonomousDatabaseRefreshableClones;

DataOciDatabaseAutonomousDatabaseRefreshableClones.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_refreshable_clones.DataOciDatabaseAutonomousDatabaseRefreshableClones;

DataOciDatabaseAutonomousDatabaseRefreshableClones.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_refreshable_clones.DataOciDatabaseAutonomousDatabaseRefreshableClones;

DataOciDatabaseAutonomousDatabaseRefreshableClones.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseAutonomousDatabaseRefreshableClones.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseRefreshableClones resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabaseRefreshableClones to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseAutonomousDatabaseRefreshableClones that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabaseRefreshableClones to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.refreshableCloneCollection">refreshableCloneCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.autonomousDatabaseIdInput">autonomousDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.filter"></a>

```java
public DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList</a>

---

##### `refreshableCloneCollection`<sup>Required</sup> <a name="refreshableCloneCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.refreshableCloneCollection"></a>

```java
public DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList getRefreshableCloneCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList</a>

---

##### `autonomousDatabaseIdInput`<sup>Optional</sup> <a name="autonomousDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.autonomousDatabaseIdInput"></a>

```java
public java.lang.String getAutonomousDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.autonomousDatabaseId"></a>

```java
public java.lang.String getAutonomousDatabaseId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClones.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_refreshable_clones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig;

DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.builder()
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
    .autonomousDatabaseId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#autonomous_database_id DataOciDatabaseAutonomousDatabaseRefreshableClones#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#id DataOciDatabaseAutonomousDatabaseRefreshableClones#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.autonomousDatabaseId"></a>

```java
public java.lang.String getAutonomousDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#autonomous_database_id DataOciDatabaseAutonomousDatabaseRefreshableClones#autonomous_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#filter DataOciDatabaseAutonomousDatabaseRefreshableClones#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#id DataOciDatabaseAutonomousDatabaseRefreshableClones#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_refreshable_clones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter;

DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#name DataOciDatabaseAutonomousDatabaseRefreshableClones#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#values DataOciDatabaseAutonomousDatabaseRefreshableClones#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#regex DataOciDatabaseAutonomousDatabaseRefreshableClones#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#name DataOciDatabaseAutonomousDatabaseRefreshableClones#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#values DataOciDatabaseAutonomousDatabaseRefreshableClones#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_refreshable_clones#regex DataOciDatabaseAutonomousDatabaseRefreshableClones#regex}.

---

### DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_refreshable_clones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection;

DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection.builder()
    .build();
```


### DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_refreshable_clones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems;

DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_refreshable_clones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList;

new DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.get"></a>

```java
public DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>>

---


### DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_refreshable_clones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference;

new DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter">DataOciDatabaseAutonomousDatabaseRefreshableClonesFilter</a>

---


### DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_refreshable_clones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList;

new DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.get"></a>

```java
public DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_refreshable_clones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference;

new DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItems</a>

---


### DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_refreshable_clones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList;

new DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.get"></a>

```java
public DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference <a name="DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_refreshable_clones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference;

new DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.items"></a>

```java
public DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseRefreshableClones.DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection">DataOciDatabaseAutonomousDatabaseRefreshableClonesRefreshableCloneCollection</a>

---



