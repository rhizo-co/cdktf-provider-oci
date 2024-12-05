# `dataOciDatabaseAutonomousDatabaseDataguardAssociations` Submodule <a name="`dataOciDatabaseAutonomousDatabaseDataguardAssociations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabaseDataguardAssociations <a name="DataOciDatabaseAutonomousDatabaseDataguardAssociations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations oci_database_autonomous_database_dataguard_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_dataguard_associations.DataOciDatabaseAutonomousDatabaseDataguardAssociations;

DataOciDatabaseAutonomousDatabaseDataguardAssociations.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#autonomous_database_id DataOciDatabaseAutonomousDatabaseDataguardAssociations#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#id DataOciDatabaseAutonomousDatabaseDataguardAssociations#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.autonomousDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#autonomous_database_id DataOciDatabaseAutonomousDatabaseDataguardAssociations#autonomous_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#filter DataOciDatabaseAutonomousDatabaseDataguardAssociations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#id DataOciDatabaseAutonomousDatabaseDataguardAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseDataguardAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_dataguard_associations.DataOciDatabaseAutonomousDatabaseDataguardAssociations;

DataOciDatabaseAutonomousDatabaseDataguardAssociations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_dataguard_associations.DataOciDatabaseAutonomousDatabaseDataguardAssociations;

DataOciDatabaseAutonomousDatabaseDataguardAssociations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_dataguard_associations.DataOciDatabaseAutonomousDatabaseDataguardAssociations;

DataOciDatabaseAutonomousDatabaseDataguardAssociations.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_dataguard_associations.DataOciDatabaseAutonomousDatabaseDataguardAssociations;

DataOciDatabaseAutonomousDatabaseDataguardAssociations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseAutonomousDatabaseDataguardAssociations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseDataguardAssociations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabaseDataguardAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseAutonomousDatabaseDataguardAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabaseDataguardAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.autonomousDatabaseDataguardAssociations">autonomousDatabaseDataguardAssociations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList">DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList">DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.autonomousDatabaseIdInput">autonomousDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `autonomousDatabaseDataguardAssociations`<sup>Required</sup> <a name="autonomousDatabaseDataguardAssociations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.autonomousDatabaseDataguardAssociations"></a>

```java
public DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList getAutonomousDatabaseDataguardAssociations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList">DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.filter"></a>

```java
public DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList">DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList</a>

---

##### `autonomousDatabaseIdInput`<sup>Optional</sup> <a name="autonomousDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.autonomousDatabaseIdInput"></a>

```java
public java.lang.String getAutonomousDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.autonomousDatabaseId"></a>

```java
public java.lang.String getAutonomousDatabaseId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociations <a name="DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociations" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_dataguard_associations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociations;

DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociations.builder()
    .build();
```


### DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig <a name="DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_dataguard_associations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig;

DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.builder()
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
//  .filter(java.util.List<DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#autonomous_database_id DataOciDatabaseAutonomousDatabaseDataguardAssociations#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#id DataOciDatabaseAutonomousDatabaseDataguardAssociations#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.autonomousDatabaseId"></a>

```java
public java.lang.String getAutonomousDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#autonomous_database_id DataOciDatabaseAutonomousDatabaseDataguardAssociations#autonomous_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#filter DataOciDatabaseAutonomousDatabaseDataguardAssociations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#id DataOciDatabaseAutonomousDatabaseDataguardAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter <a name="DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_dataguard_associations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter;

DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#name DataOciDatabaseAutonomousDatabaseDataguardAssociations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#values DataOciDatabaseAutonomousDatabaseDataguardAssociations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#regex DataOciDatabaseAutonomousDatabaseDataguardAssociations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#name DataOciDatabaseAutonomousDatabaseDataguardAssociations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#values DataOciDatabaseAutonomousDatabaseDataguardAssociations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_dataguard_associations#regex DataOciDatabaseAutonomousDatabaseDataguardAssociations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList <a name="DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_dataguard_associations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList;

new DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.get"></a>

```java
public DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference <a name="DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_dataguard_associations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference;

new DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.applyLag">applyLag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.applyRate">applyRate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.isAutomaticFailoverEnabled">isAutomaticFailoverEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.peerAutonomousDatabaseId">peerAutonomousDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.peerAutonomousDatabaseLifeCycleState">peerAutonomousDatabaseLifeCycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.peerRole">peerRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.protectionMode">protectionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.timeLastRoleChanged">timeLastRoleChanged</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.timeLastSynced">timeLastSynced</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.transportLag">transportLag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociations">DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applyLag`<sup>Required</sup> <a name="applyLag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.applyLag"></a>

```java
public java.lang.String getApplyLag();
```

- *Type:* java.lang.String

---

##### `applyRate`<sup>Required</sup> <a name="applyRate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.applyRate"></a>

```java
public java.lang.String getApplyRate();
```

- *Type:* java.lang.String

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.autonomousDatabaseId"></a>

```java
public java.lang.String getAutonomousDatabaseId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isAutomaticFailoverEnabled`<sup>Required</sup> <a name="isAutomaticFailoverEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.isAutomaticFailoverEnabled"></a>

```java
public IResolvable getIsAutomaticFailoverEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `peerAutonomousDatabaseId`<sup>Required</sup> <a name="peerAutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.peerAutonomousDatabaseId"></a>

```java
public java.lang.String getPeerAutonomousDatabaseId();
```

- *Type:* java.lang.String

---

##### `peerAutonomousDatabaseLifeCycleState`<sup>Required</sup> <a name="peerAutonomousDatabaseLifeCycleState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.peerAutonomousDatabaseLifeCycleState"></a>

```java
public java.lang.String getPeerAutonomousDatabaseLifeCycleState();
```

- *Type:* java.lang.String

---

##### `peerRole`<sup>Required</sup> <a name="peerRole" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.peerRole"></a>

```java
public java.lang.String getPeerRole();
```

- *Type:* java.lang.String

---

##### `protectionMode`<sup>Required</sup> <a name="protectionMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.protectionMode"></a>

```java
public java.lang.String getProtectionMode();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeLastRoleChanged`<sup>Required</sup> <a name="timeLastRoleChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.timeLastRoleChanged"></a>

```java
public java.lang.String getTimeLastRoleChanged();
```

- *Type:* java.lang.String

---

##### `timeLastSynced`<sup>Required</sup> <a name="timeLastSynced" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.timeLastSynced"></a>

```java
public java.lang.String getTimeLastSynced();
```

- *Type:* java.lang.String

---

##### `transportLag`<sup>Required</sup> <a name="transportLag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.transportLag"></a>

```java
public java.lang.String getTransportLag();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociationsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociations">DataOciDatabaseAutonomousDatabaseDataguardAssociationsAutonomousDatabaseDataguardAssociations</a>

---


### DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList <a name="DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_dataguard_associations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList;

new DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.get"></a>

```java
public DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter</a>>

---


### DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference <a name="DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_autonomous_database_dataguard_associations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference;

new DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseDataguardAssociations.DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter">DataOciDatabaseAutonomousDatabaseDataguardAssociationsFilter</a>

---



