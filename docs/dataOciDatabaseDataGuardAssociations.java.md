# `dataOciDatabaseDataGuardAssociations` Submodule <a name="`dataOciDatabaseDataGuardAssociations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDataGuardAssociations <a name="DataOciDatabaseDataGuardAssociations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations oci_database_data_guard_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_data_guard_associations.DataOciDatabaseDataGuardAssociations;

DataOciDatabaseDataGuardAssociations.Builder.create(Construct scope, java.lang.String id)
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
    .databaseId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseDataGuardAssociationsFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#database_id DataOciDatabaseDataGuardAssociations#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter">DataOciDatabaseDataGuardAssociationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#id DataOciDatabaseDataGuardAssociations#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.databaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#database_id DataOciDatabaseDataGuardAssociations#database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter">DataOciDatabaseDataGuardAssociationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#filter DataOciDatabaseDataGuardAssociations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#id DataOciDatabaseDataGuardAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseDataGuardAssociationsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter">DataOciDatabaseDataGuardAssociationsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDataGuardAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_data_guard_associations.DataOciDatabaseDataGuardAssociations;

DataOciDatabaseDataGuardAssociations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_data_guard_associations.DataOciDatabaseDataGuardAssociations;

DataOciDatabaseDataGuardAssociations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_data_guard_associations.DataOciDatabaseDataGuardAssociations;

DataOciDatabaseDataGuardAssociations.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_data_guard_associations.DataOciDatabaseDataGuardAssociations;

DataOciDatabaseDataGuardAssociations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseDataGuardAssociations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseDataGuardAssociations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseDataGuardAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseDataGuardAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDataGuardAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.dataGuardAssociations">dataGuardAssociations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList">DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList">DataOciDatabaseDataGuardAssociationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.databaseIdInput">databaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter">DataOciDatabaseDataGuardAssociationsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `dataGuardAssociations`<sup>Required</sup> <a name="dataGuardAssociations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.dataGuardAssociations"></a>

```java
public DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList getDataGuardAssociations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList">DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.filter"></a>

```java
public DataOciDatabaseDataGuardAssociationsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList">DataOciDatabaseDataGuardAssociationsFilterList</a>

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.databaseIdInput"></a>

```java
public java.lang.String getDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter">DataOciDatabaseDataGuardAssociationsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDataGuardAssociationsConfig <a name="DataOciDatabaseDataGuardAssociationsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_data_guard_associations.DataOciDatabaseDataGuardAssociationsConfig;

DataOciDatabaseDataGuardAssociationsConfig.builder()
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
    .databaseId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseDataGuardAssociationsFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#database_id DataOciDatabaseDataGuardAssociations#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter">DataOciDatabaseDataGuardAssociationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#id DataOciDatabaseDataGuardAssociations#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#database_id DataOciDatabaseDataGuardAssociations#database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter">DataOciDatabaseDataGuardAssociationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#filter DataOciDatabaseDataGuardAssociations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#id DataOciDatabaseDataGuardAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseDataGuardAssociationsDataGuardAssociations <a name="DataOciDatabaseDataGuardAssociationsDataGuardAssociations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_data_guard_associations.DataOciDatabaseDataGuardAssociationsDataGuardAssociations;

DataOciDatabaseDataGuardAssociationsDataGuardAssociations.builder()
    .build();
```


### DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions <a name="DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_data_guard_associations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions;

DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions.builder()
    .build();
```


### DataOciDatabaseDataGuardAssociationsFilter <a name="DataOciDatabaseDataGuardAssociationsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_data_guard_associations.DataOciDatabaseDataGuardAssociationsFilter;

DataOciDatabaseDataGuardAssociationsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#name DataOciDatabaseDataGuardAssociations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#values DataOciDatabaseDataGuardAssociations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#regex DataOciDatabaseDataGuardAssociations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#name DataOciDatabaseDataGuardAssociations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#values DataOciDatabaseDataGuardAssociations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_associations#regex DataOciDatabaseDataGuardAssociations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList <a name="DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_data_guard_associations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList;

new DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.get"></a>

```java
public DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference <a name="DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_data_guard_associations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference;

new DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions">DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDiagnosticsEventsEnabled`<sup>Required</sup> <a name="isDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```java
public IResolvable getIsDiagnosticsEventsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isHealthMonitoringEnabled`<sup>Required</sup> <a name="isHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```java
public IResolvable getIsHealthMonitoringEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isIncidentLogsEnabled`<sup>Required</sup> <a name="isIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```java
public IResolvable getIsIncidentLogsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions">DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptions</a>

---


### DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList <a name="DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_data_guard_associations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList;

new DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.get"></a>

```java
public DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference <a name="DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_data_guard_associations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference;

new DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.applyLag">applyLag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.applyRate">applyRate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.backupNetworkNsgIds">backupNetworkNsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.createAsync">createAsync</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.creationType">creationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseAdminPassword">databaseAdminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseDefinedTags">databaseDefinedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseFreeformTags">databaseFreeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList">DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dbSystemDefinedTags">dbSystemDefinedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dbSystemFreeformTags">dbSystemFreeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dbSystemSecurityAttributes">dbSystemSecurityAttributes</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.deleteStandbyDbHomeOnDelete">deleteStandbyDbHomeOnDelete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.faultDomains">faultDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.isActiveDataGuardEnabled">isActiveDataGuardEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDatabaseId">peerDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDataGuardAssociationId">peerDataGuardAssociationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDbHomeId">peerDbHomeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDbSystemId">peerDbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDbUniqueName">peerDbUniqueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerRole">peerRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerSidPrefix">peerSidPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerVmClusterId">peerVmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.protectionMode">protectionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.storageVolumePerformanceMode">storageVolumePerformanceMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.transportType">transportType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociations">DataOciDatabaseDataGuardAssociationsDataGuardAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applyLag`<sup>Required</sup> <a name="applyLag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.applyLag"></a>

```java
public java.lang.String getApplyLag();
```

- *Type:* java.lang.String

---

##### `applyRate`<sup>Required</sup> <a name="applyRate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.applyRate"></a>

```java
public java.lang.String getApplyRate();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `backupNetworkNsgIds`<sup>Required</sup> <a name="backupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.backupNetworkNsgIds"></a>

```java
public java.util.List<java.lang.String> getBackupNetworkNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `createAsync`<sup>Required</sup> <a name="createAsync" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.createAsync"></a>

```java
public IResolvable getCreateAsync();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `creationType`<sup>Required</sup> <a name="creationType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.creationType"></a>

```java
public java.lang.String getCreationType();
```

- *Type:* java.lang.String

---

##### `databaseAdminPassword`<sup>Required</sup> <a name="databaseAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseAdminPassword"></a>

```java
public java.lang.String getDatabaseAdminPassword();
```

- *Type:* java.lang.String

---

##### `databaseDefinedTags`<sup>Required</sup> <a name="databaseDefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseDefinedTags"></a>

```java
public StringMap getDatabaseDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `databaseFreeformTags`<sup>Required</sup> <a name="databaseFreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseFreeformTags"></a>

```java
public StringMap getDatabaseFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

---

##### `databaseSoftwareImageId`<sup>Required</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.databaseSoftwareImageId"></a>

```java
public java.lang.String getDatabaseSoftwareImageId();
```

- *Type:* java.lang.String

---

##### `dataCollectionOptions`<sup>Required</sup> <a name="dataCollectionOptions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dataCollectionOptions"></a>

```java
public DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList getDataCollectionOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList">DataOciDatabaseDataGuardAssociationsDataGuardAssociationsDataCollectionOptionsList</a>

---

##### `dbSystemDefinedTags`<sup>Required</sup> <a name="dbSystemDefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dbSystemDefinedTags"></a>

```java
public StringMap getDbSystemDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `dbSystemFreeformTags`<sup>Required</sup> <a name="dbSystemFreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dbSystemFreeformTags"></a>

```java
public StringMap getDbSystemFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `dbSystemSecurityAttributes`<sup>Required</sup> <a name="dbSystemSecurityAttributes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.dbSystemSecurityAttributes"></a>

```java
public StringMap getDbSystemSecurityAttributes();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `deleteStandbyDbHomeOnDelete`<sup>Required</sup> <a name="deleteStandbyDbHomeOnDelete" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.deleteStandbyDbHomeOnDelete"></a>

```java
public java.lang.String getDeleteStandbyDbHomeOnDelete();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `faultDomains`<sup>Required</sup> <a name="faultDomains" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.faultDomains"></a>

```java
public java.util.List<java.lang.String> getFaultDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isActiveDataGuardEnabled`<sup>Required</sup> <a name="isActiveDataGuardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.isActiveDataGuardEnabled"></a>

```java
public IResolvable getIsActiveDataGuardEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `peerDatabaseId`<sup>Required</sup> <a name="peerDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDatabaseId"></a>

```java
public java.lang.String getPeerDatabaseId();
```

- *Type:* java.lang.String

---

##### `peerDataGuardAssociationId`<sup>Required</sup> <a name="peerDataGuardAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDataGuardAssociationId"></a>

```java
public java.lang.String getPeerDataGuardAssociationId();
```

- *Type:* java.lang.String

---

##### `peerDbHomeId`<sup>Required</sup> <a name="peerDbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDbHomeId"></a>

```java
public java.lang.String getPeerDbHomeId();
```

- *Type:* java.lang.String

---

##### `peerDbSystemId`<sup>Required</sup> <a name="peerDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDbSystemId"></a>

```java
public java.lang.String getPeerDbSystemId();
```

- *Type:* java.lang.String

---

##### `peerDbUniqueName`<sup>Required</sup> <a name="peerDbUniqueName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerDbUniqueName"></a>

```java
public java.lang.String getPeerDbUniqueName();
```

- *Type:* java.lang.String

---

##### `peerRole`<sup>Required</sup> <a name="peerRole" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerRole"></a>

```java
public java.lang.String getPeerRole();
```

- *Type:* java.lang.String

---

##### `peerSidPrefix`<sup>Required</sup> <a name="peerSidPrefix" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerSidPrefix"></a>

```java
public java.lang.String getPeerSidPrefix();
```

- *Type:* java.lang.String

---

##### `peerVmClusterId`<sup>Required</sup> <a name="peerVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.peerVmClusterId"></a>

```java
public java.lang.String getPeerVmClusterId();
```

- *Type:* java.lang.String

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `protectionMode`<sup>Required</sup> <a name="protectionMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.protectionMode"></a>

```java
public java.lang.String getProtectionMode();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `storageVolumePerformanceMode`<sup>Required</sup> <a name="storageVolumePerformanceMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.storageVolumePerformanceMode"></a>

```java
public java.lang.String getStorageVolumePerformanceMode();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `transportType`<sup>Required</sup> <a name="transportType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.transportType"></a>

```java
public java.lang.String getTransportType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociationsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseDataGuardAssociationsDataGuardAssociations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsDataGuardAssociations">DataOciDatabaseDataGuardAssociationsDataGuardAssociations</a>

---


### DataOciDatabaseDataGuardAssociationsFilterList <a name="DataOciDatabaseDataGuardAssociationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_data_guard_associations.DataOciDatabaseDataGuardAssociationsFilterList;

new DataOciDatabaseDataGuardAssociationsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.get"></a>

```java
public DataOciDatabaseDataGuardAssociationsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter">DataOciDatabaseDataGuardAssociationsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter">DataOciDatabaseDataGuardAssociationsFilter</a>>

---


### DataOciDatabaseDataGuardAssociationsFilterOutputReference <a name="DataOciDatabaseDataGuardAssociationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_data_guard_associations.DataOciDatabaseDataGuardAssociationsFilterOutputReference;

new DataOciDatabaseDataGuardAssociationsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter">DataOciDatabaseDataGuardAssociationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociations.DataOciDatabaseDataGuardAssociationsFilter">DataOciDatabaseDataGuardAssociationsFilter</a>

---



