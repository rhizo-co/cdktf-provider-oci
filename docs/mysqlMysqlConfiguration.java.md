# `mysqlMysqlConfiguration` Submodule <a name="`mysqlMysqlConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlMysqlConfiguration <a name="MysqlMysqlConfiguration" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration oci_mysql_mysql_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_configuration.MysqlMysqlConfiguration;

MysqlMysqlConfiguration.Builder.create(Construct scope, java.lang.String id)
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
    .shapeName(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .initVariables(MysqlMysqlConfigurationInitVariables)
//  .parentConfigurationId(java.lang.String)
//  .timeouts(MysqlMysqlConfigurationTimeouts)
//  .variables(MysqlMysqlConfigurationVariables)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#compartment_id MysqlMysqlConfiguration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.shapeName">shapeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#shape_name MysqlMysqlConfiguration#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#defined_tags MysqlMysqlConfiguration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#description MysqlMysqlConfiguration#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#display_name MysqlMysqlConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#freeform_tags MysqlMysqlConfiguration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#id MysqlMysqlConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.initVariables">initVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a></code> | init_variables block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.parentConfigurationId">parentConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parent_configuration_id MysqlMysqlConfiguration#parent_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.variables">variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a></code> | variables block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#compartment_id MysqlMysqlConfiguration#compartment_id}.

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.shapeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#shape_name MysqlMysqlConfiguration#shape_name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#defined_tags MysqlMysqlConfiguration#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#description MysqlMysqlConfiguration#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#display_name MysqlMysqlConfiguration#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#freeform_tags MysqlMysqlConfiguration#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#id MysqlMysqlConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initVariables`<sup>Optional</sup> <a name="initVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.initVariables"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a>

init_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#init_variables MysqlMysqlConfiguration#init_variables}

---

##### `parentConfigurationId`<sup>Optional</sup> <a name="parentConfigurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.parentConfigurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parent_configuration_id MysqlMysqlConfiguration#parent_configuration_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#timeouts MysqlMysqlConfiguration#timeouts}

---

##### `variables`<sup>Optional</sup> <a name="variables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.variables"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a>

variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#variables MysqlMysqlConfiguration#variables}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putInitVariables">putInitVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables">putVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetInitVariables">resetInitVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetParentConfigurationId">resetParentConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetVariables">resetVariables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInitVariables` <a name="putInitVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putInitVariables"></a>

```java
public void putInitVariables(MysqlMysqlConfigurationInitVariables value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putInitVariables.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putTimeouts"></a>

```java
public void putTimeouts(MysqlMysqlConfigurationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a>

---

##### `putVariables` <a name="putVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables"></a>

```java
public void putVariables(MysqlMysqlConfigurationVariables value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetInitVariables` <a name="resetInitVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetInitVariables"></a>

```java
public void resetInitVariables()
```

##### `resetParentConfigurationId` <a name="resetParentConfigurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetParentConfigurationId"></a>

```java
public void resetParentConfigurationId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVariables` <a name="resetVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetVariables"></a>

```java
public void resetVariables()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MysqlMysqlConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_configuration.MysqlMysqlConfiguration;

MysqlMysqlConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_configuration.MysqlMysqlConfiguration;

MysqlMysqlConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_configuration.MysqlMysqlConfiguration;

MysqlMysqlConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_configuration.MysqlMysqlConfiguration;

MysqlMysqlConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MysqlMysqlConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MysqlMysqlConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MysqlMysqlConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MysqlMysqlConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MysqlMysqlConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.initVariables">initVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference">MysqlMysqlConfigurationInitVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference">MysqlMysqlConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.variables">variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference">MysqlMysqlConfigurationVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.initVariablesInput">initVariablesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.parentConfigurationIdInput">parentConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.shapeNameInput">shapeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.variablesInput">variablesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.parentConfigurationId">parentConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `initVariables`<sup>Required</sup> <a name="initVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.initVariables"></a>

```java
public MysqlMysqlConfigurationInitVariablesOutputReference getInitVariables();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference">MysqlMysqlConfigurationInitVariablesOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeouts"></a>

```java
public MysqlMysqlConfigurationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference">MysqlMysqlConfigurationTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `variables`<sup>Required</sup> <a name="variables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.variables"></a>

```java
public MysqlMysqlConfigurationVariablesOutputReference getVariables();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference">MysqlMysqlConfigurationVariablesOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `initVariablesInput`<sup>Optional</sup> <a name="initVariablesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.initVariablesInput"></a>

```java
public MysqlMysqlConfigurationInitVariables getInitVariablesInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a>

---

##### `parentConfigurationIdInput`<sup>Optional</sup> <a name="parentConfigurationIdInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.parentConfigurationIdInput"></a>

```java
public java.lang.String getParentConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `shapeNameInput`<sup>Optional</sup> <a name="shapeNameInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.shapeNameInput"></a>

```java
public java.lang.String getShapeNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a>

---

##### `variablesInput`<sup>Optional</sup> <a name="variablesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.variablesInput"></a>

```java
public MysqlMysqlConfigurationVariables getVariablesInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parentConfigurationId`<sup>Required</sup> <a name="parentConfigurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.parentConfigurationId"></a>

```java
public java.lang.String getParentConfigurationId();
```

- *Type:* java.lang.String

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlMysqlConfigurationConfig <a name="MysqlMysqlConfigurationConfig" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_configuration.MysqlMysqlConfigurationConfig;

MysqlMysqlConfigurationConfig.builder()
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
    .shapeName(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .initVariables(MysqlMysqlConfigurationInitVariables)
//  .parentConfigurationId(java.lang.String)
//  .timeouts(MysqlMysqlConfigurationTimeouts)
//  .variables(MysqlMysqlConfigurationVariables)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#compartment_id MysqlMysqlConfiguration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#shape_name MysqlMysqlConfiguration#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#defined_tags MysqlMysqlConfiguration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#description MysqlMysqlConfiguration#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#display_name MysqlMysqlConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#freeform_tags MysqlMysqlConfiguration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#id MysqlMysqlConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.initVariables">initVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a></code> | init_variables block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.parentConfigurationId">parentConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parent_configuration_id MysqlMysqlConfiguration#parent_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.variables">variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a></code> | variables block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#compartment_id MysqlMysqlConfiguration#compartment_id}.

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#shape_name MysqlMysqlConfiguration#shape_name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#defined_tags MysqlMysqlConfiguration#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#description MysqlMysqlConfiguration#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#display_name MysqlMysqlConfiguration#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#freeform_tags MysqlMysqlConfiguration#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#id MysqlMysqlConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initVariables`<sup>Optional</sup> <a name="initVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.initVariables"></a>

```java
public MysqlMysqlConfigurationInitVariables getInitVariables();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a>

init_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#init_variables MysqlMysqlConfiguration#init_variables}

---

##### `parentConfigurationId`<sup>Optional</sup> <a name="parentConfigurationId" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.parentConfigurationId"></a>

```java
public java.lang.String getParentConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parent_configuration_id MysqlMysqlConfiguration#parent_configuration_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.timeouts"></a>

```java
public MysqlMysqlConfigurationTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#timeouts MysqlMysqlConfiguration#timeouts}

---

##### `variables`<sup>Optional</sup> <a name="variables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.variables"></a>

```java
public MysqlMysqlConfigurationVariables getVariables();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a>

variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#variables MysqlMysqlConfiguration#variables}

---

### MysqlMysqlConfigurationInitVariables <a name="MysqlMysqlConfigurationInitVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_configuration.MysqlMysqlConfigurationInitVariables;

MysqlMysqlConfigurationInitVariables.builder()
//  .lowerCaseTableNames(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables.property.lowerCaseTableNames">lowerCaseTableNames</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#lower_case_table_names MysqlMysqlConfiguration#lower_case_table_names}. |

---

##### `lowerCaseTableNames`<sup>Optional</sup> <a name="lowerCaseTableNames" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables.property.lowerCaseTableNames"></a>

```java
public java.lang.String getLowerCaseTableNames();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#lower_case_table_names MysqlMysqlConfiguration#lower_case_table_names}.

---

### MysqlMysqlConfigurationTimeouts <a name="MysqlMysqlConfigurationTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_configuration.MysqlMysqlConfigurationTimeouts;

MysqlMysqlConfigurationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#create MysqlMysqlConfiguration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#delete MysqlMysqlConfiguration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#update MysqlMysqlConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#create MysqlMysqlConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#delete MysqlMysqlConfiguration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#update MysqlMysqlConfiguration#update}.

---

### MysqlMysqlConfigurationVariables <a name="MysqlMysqlConfigurationVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_configuration.MysqlMysqlConfigurationVariables;

MysqlMysqlConfigurationVariables.builder()
//  .autocommit(java.lang.Boolean)
//  .autocommit(IResolvable)
//  .bigTables(java.lang.Boolean)
//  .bigTables(IResolvable)
//  .binlogExpireLogsSeconds(java.lang.Number)
//  .binlogRowMetadata(java.lang.String)
//  .binlogRowValueOptions(java.lang.String)
//  .binlogTransactionCompression(java.lang.Boolean)
//  .binlogTransactionCompression(IResolvable)
//  .completionType(java.lang.String)
//  .connectionMemoryChunkSize(java.lang.Number)
//  .connectionMemoryLimit(java.lang.String)
//  .connectTimeout(java.lang.Number)
//  .cteMaxRecursionDepth(java.lang.String)
//  .defaultAuthenticationPlugin(java.lang.String)
//  .foreignKeyChecks(java.lang.Boolean)
//  .foreignKeyChecks(IResolvable)
//  .generatedRandomPasswordLength(java.lang.Number)
//  .globalConnectionMemoryLimit(java.lang.String)
//  .globalConnectionMemoryTracking(java.lang.Boolean)
//  .globalConnectionMemoryTracking(IResolvable)
//  .groupReplicationConsistency(java.lang.String)
//  .informationSchemaStatsExpiry(java.lang.Number)
//  .innodbBufferPoolDumpPct(java.lang.Number)
//  .innodbBufferPoolInstances(java.lang.Number)
//  .innodbBufferPoolSize(java.lang.String)
//  .innodbDdlBufferSize(java.lang.String)
//  .innodbDdlThreads(java.lang.Number)
//  .innodbFtEnableStopword(java.lang.Boolean)
//  .innodbFtEnableStopword(IResolvable)
//  .innodbFtMaxTokenSize(java.lang.Number)
//  .innodbFtMinTokenSize(java.lang.Number)
//  .innodbFtNumWordOptimize(java.lang.Number)
//  .innodbFtResultCacheLimit(java.lang.String)
//  .innodbFtServerStopwordTable(java.lang.String)
//  .innodbLockWaitTimeout(java.lang.Number)
//  .innodbLogWriterThreads(java.lang.Boolean)
//  .innodbLogWriterThreads(IResolvable)
//  .innodbMaxPurgeLag(java.lang.String)
//  .innodbMaxPurgeLagDelay(java.lang.Number)
//  .innodbStatsPersistentSamplePages(java.lang.String)
//  .innodbStatsTransientSamplePages(java.lang.String)
//  .interactiveTimeout(java.lang.Number)
//  .localInfile(java.lang.Boolean)
//  .localInfile(IResolvable)
//  .mandatoryRoles(java.lang.String)
//  .maxAllowedPacket(java.lang.Number)
//  .maxBinlogCacheSize(java.lang.String)
//  .maxConnectErrors(java.lang.String)
//  .maxConnections(java.lang.Number)
//  .maxExecutionTime(java.lang.String)
//  .maxHeapTableSize(java.lang.String)
//  .maxPreparedStmtCount(java.lang.Number)
//  .mysqlFirewallMode(java.lang.Boolean)
//  .mysqlFirewallMode(IResolvable)
//  .mysqlxConnectTimeout(java.lang.Number)
//  .mysqlxDeflateDefaultCompressionLevel(java.lang.Number)
//  .mysqlxDeflateMaxClientCompressionLevel(java.lang.Number)
//  .mysqlxDocumentIdUniquePrefix(java.lang.Number)
//  .mysqlxEnableHelloNotice(java.lang.Boolean)
//  .mysqlxEnableHelloNotice(IResolvable)
//  .mysqlxIdleWorkerThreadTimeout(java.lang.Number)
//  .mysqlxInteractiveTimeout(java.lang.Number)
//  .mysqlxLz4DefaultCompressionLevel(java.lang.Number)
//  .mysqlxLz4MaxClientCompressionLevel(java.lang.Number)
//  .mysqlxMaxAllowedPacket(java.lang.Number)
//  .mysqlxMinWorkerThreads(java.lang.Number)
//  .mysqlxReadTimeout(java.lang.Number)
//  .mysqlxWaitTimeout(java.lang.Number)
//  .mysqlxWriteTimeout(java.lang.Number)
//  .mysqlxZstdDefaultCompressionLevel(java.lang.Number)
//  .mysqlxZstdMaxClientCompressionLevel(java.lang.Number)
//  .mysqlZstdDefaultCompressionLevel(java.lang.Number)
//  .netReadTimeout(java.lang.Number)
//  .netWriteTimeout(java.lang.Number)
//  .parserMaxMemSize(java.lang.String)
//  .queryAllocBlockSize(java.lang.String)
//  .queryPreallocSize(java.lang.String)
//  .regexpTimeLimit(java.lang.Number)
//  .sortBufferSize(java.lang.String)
//  .sqlMode(java.lang.String)
//  .sqlRequirePrimaryKey(java.lang.Boolean)
//  .sqlRequirePrimaryKey(IResolvable)
//  .sqlWarnings(java.lang.Boolean)
//  .sqlWarnings(IResolvable)
//  .threadPoolDedicatedListeners(java.lang.Boolean)
//  .threadPoolDedicatedListeners(IResolvable)
//  .threadPoolMaxTransactionsLimit(java.lang.Number)
//  .timeZone(java.lang.String)
//  .tmpTableSize(java.lang.String)
//  .transactionIsolation(java.lang.String)
//  .waitTimeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.autocommit">autocommit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#autocommit MysqlMysqlConfiguration#autocommit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.bigTables">bigTables</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#big_tables MysqlMysqlConfiguration#big_tables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogExpireLogsSeconds">binlogExpireLogsSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_expire_logs_seconds MysqlMysqlConfiguration#binlog_expire_logs_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogRowMetadata">binlogRowMetadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_row_metadata MysqlMysqlConfiguration#binlog_row_metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogRowValueOptions">binlogRowValueOptions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_row_value_options MysqlMysqlConfiguration#binlog_row_value_options}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogTransactionCompression">binlogTransactionCompression</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_transaction_compression MysqlMysqlConfiguration#binlog_transaction_compression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.completionType">completionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#completion_type MysqlMysqlConfiguration#completion_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectionMemoryChunkSize">connectionMemoryChunkSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connection_memory_chunk_size MysqlMysqlConfiguration#connection_memory_chunk_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectionMemoryLimit">connectionMemoryLimit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connection_memory_limit MysqlMysqlConfiguration#connection_memory_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectTimeout">connectTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connect_timeout MysqlMysqlConfiguration#connect_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.cteMaxRecursionDepth">cteMaxRecursionDepth</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#cte_max_recursion_depth MysqlMysqlConfiguration#cte_max_recursion_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.defaultAuthenticationPlugin">defaultAuthenticationPlugin</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#default_authentication_plugin MysqlMysqlConfiguration#default_authentication_plugin}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.foreignKeyChecks">foreignKeyChecks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#foreign_key_checks MysqlMysqlConfiguration#foreign_key_checks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.generatedRandomPasswordLength">generatedRandomPasswordLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#generated_random_password_length MysqlMysqlConfiguration#generated_random_password_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.globalConnectionMemoryLimit">globalConnectionMemoryLimit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#global_connection_memory_limit MysqlMysqlConfiguration#global_connection_memory_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.globalConnectionMemoryTracking">globalConnectionMemoryTracking</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#global_connection_memory_tracking MysqlMysqlConfiguration#global_connection_memory_tracking}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.groupReplicationConsistency">groupReplicationConsistency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#group_replication_consistency MysqlMysqlConfiguration#group_replication_consistency}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.informationSchemaStatsExpiry">informationSchemaStatsExpiry</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#information_schema_stats_expiry MysqlMysqlConfiguration#information_schema_stats_expiry}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolDumpPct">innodbBufferPoolDumpPct</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_dump_pct MysqlMysqlConfiguration#innodb_buffer_pool_dump_pct}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolInstances">innodbBufferPoolInstances</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_instances MysqlMysqlConfiguration#innodb_buffer_pool_instances}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolSize">innodbBufferPoolSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_size MysqlMysqlConfiguration#innodb_buffer_pool_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbDdlBufferSize">innodbDdlBufferSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ddl_buffer_size MysqlMysqlConfiguration#innodb_ddl_buffer_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbDdlThreads">innodbDdlThreads</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ddl_threads MysqlMysqlConfiguration#innodb_ddl_threads}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtEnableStopword">innodbFtEnableStopword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_enable_stopword MysqlMysqlConfiguration#innodb_ft_enable_stopword}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtMaxTokenSize">innodbFtMaxTokenSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_max_token_size MysqlMysqlConfiguration#innodb_ft_max_token_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtMinTokenSize">innodbFtMinTokenSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_min_token_size MysqlMysqlConfiguration#innodb_ft_min_token_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtNumWordOptimize">innodbFtNumWordOptimize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_num_word_optimize MysqlMysqlConfiguration#innodb_ft_num_word_optimize}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtResultCacheLimit">innodbFtResultCacheLimit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_result_cache_limit MysqlMysqlConfiguration#innodb_ft_result_cache_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtServerStopwordTable">innodbFtServerStopwordTable</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_server_stopword_table MysqlMysqlConfiguration#innodb_ft_server_stopword_table}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbLockWaitTimeout">innodbLockWaitTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_lock_wait_timeout MysqlMysqlConfiguration#innodb_lock_wait_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbLogWriterThreads">innodbLogWriterThreads</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_log_writer_threads MysqlMysqlConfiguration#innodb_log_writer_threads}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbMaxPurgeLag">innodbMaxPurgeLag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag MysqlMysqlConfiguration#innodb_max_purge_lag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbMaxPurgeLagDelay">innodbMaxPurgeLagDelay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag_delay MysqlMysqlConfiguration#innodb_max_purge_lag_delay}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbStatsPersistentSamplePages">innodbStatsPersistentSamplePages</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_stats_persistent_sample_pages MysqlMysqlConfiguration#innodb_stats_persistent_sample_pages}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbStatsTransientSamplePages">innodbStatsTransientSamplePages</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_stats_transient_sample_pages MysqlMysqlConfiguration#innodb_stats_transient_sample_pages}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.interactiveTimeout">interactiveTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#interactive_timeout MysqlMysqlConfiguration#interactive_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.localInfile">localInfile</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#local_infile MysqlMysqlConfiguration#local_infile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mandatoryRoles">mandatoryRoles</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mandatory_roles MysqlMysqlConfiguration#mandatory_roles}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxAllowedPacket">maxAllowedPacket</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_allowed_packet MysqlMysqlConfiguration#max_allowed_packet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxBinlogCacheSize">maxBinlogCacheSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_binlog_cache_size MysqlMysqlConfiguration#max_binlog_cache_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxConnectErrors">maxConnectErrors</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_connect_errors MysqlMysqlConfiguration#max_connect_errors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxConnections">maxConnections</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_connections MysqlMysqlConfiguration#max_connections}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxExecutionTime">maxExecutionTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_execution_time MysqlMysqlConfiguration#max_execution_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxHeapTableSize">maxHeapTableSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_heap_table_size MysqlMysqlConfiguration#max_heap_table_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxPreparedStmtCount">maxPreparedStmtCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_prepared_stmt_count MysqlMysqlConfiguration#max_prepared_stmt_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlFirewallMode">mysqlFirewallMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysql_firewall_mode MysqlMysqlConfiguration#mysql_firewall_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxConnectTimeout">mysqlxConnectTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_connect_timeout MysqlMysqlConfiguration#mysqlx_connect_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDeflateDefaultCompressionLevel">mysqlxDeflateDefaultCompressionLevel</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_default_compression_level MysqlMysqlConfiguration#mysqlx_deflate_default_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDeflateMaxClientCompressionLevel">mysqlxDeflateMaxClientCompressionLevel</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_max_client_compression_level MysqlMysqlConfiguration#mysqlx_deflate_max_client_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDocumentIdUniquePrefix">mysqlxDocumentIdUniquePrefix</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_document_id_unique_prefix MysqlMysqlConfiguration#mysqlx_document_id_unique_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxEnableHelloNotice">mysqlxEnableHelloNotice</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_enable_hello_notice MysqlMysqlConfiguration#mysqlx_enable_hello_notice}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxIdleWorkerThreadTimeout">mysqlxIdleWorkerThreadTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_idle_worker_thread_timeout MysqlMysqlConfiguration#mysqlx_idle_worker_thread_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxInteractiveTimeout">mysqlxInteractiveTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_interactive_timeout MysqlMysqlConfiguration#mysqlx_interactive_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxLz4DefaultCompressionLevel">mysqlxLz4DefaultCompressionLevel</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4default_compression_level MysqlMysqlConfiguration#mysqlx_lz4default_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxLz4MaxClientCompressionLevel">mysqlxLz4MaxClientCompressionLevel</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4max_client_compression_level MysqlMysqlConfiguration#mysqlx_lz4max_client_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxMaxAllowedPacket">mysqlxMaxAllowedPacket</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_max_allowed_packet MysqlMysqlConfiguration#mysqlx_max_allowed_packet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxMinWorkerThreads">mysqlxMinWorkerThreads</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_min_worker_threads MysqlMysqlConfiguration#mysqlx_min_worker_threads}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxReadTimeout">mysqlxReadTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_read_timeout MysqlMysqlConfiguration#mysqlx_read_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxWaitTimeout">mysqlxWaitTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_wait_timeout MysqlMysqlConfiguration#mysqlx_wait_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxWriteTimeout">mysqlxWriteTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_write_timeout MysqlMysqlConfiguration#mysqlx_write_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxZstdDefaultCompressionLevel">mysqlxZstdDefaultCompressionLevel</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_default_compression_level MysqlMysqlConfiguration#mysqlx_zstd_default_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxZstdMaxClientCompressionLevel">mysqlxZstdMaxClientCompressionLevel</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_max_client_compression_level MysqlMysqlConfiguration#mysqlx_zstd_max_client_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlZstdDefaultCompressionLevel">mysqlZstdDefaultCompressionLevel</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysql_zstd_default_compression_level MysqlMysqlConfiguration#mysql_zstd_default_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.netReadTimeout">netReadTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#net_read_timeout MysqlMysqlConfiguration#net_read_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.netWriteTimeout">netWriteTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#net_write_timeout MysqlMysqlConfiguration#net_write_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.parserMaxMemSize">parserMaxMemSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parser_max_mem_size MysqlMysqlConfiguration#parser_max_mem_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.queryAllocBlockSize">queryAllocBlockSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#query_alloc_block_size MysqlMysqlConfiguration#query_alloc_block_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.queryPreallocSize">queryPreallocSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#query_prealloc_size MysqlMysqlConfiguration#query_prealloc_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.regexpTimeLimit">regexpTimeLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#regexp_time_limit MysqlMysqlConfiguration#regexp_time_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sortBufferSize">sortBufferSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sort_buffer_size MysqlMysqlConfiguration#sort_buffer_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlMode">sqlMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_mode MysqlMysqlConfiguration#sql_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlRequirePrimaryKey">sqlRequirePrimaryKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_require_primary_key MysqlMysqlConfiguration#sql_require_primary_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlWarnings">sqlWarnings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_warnings MysqlMysqlConfiguration#sql_warnings}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.threadPoolDedicatedListeners">threadPoolDedicatedListeners</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#thread_pool_dedicated_listeners MysqlMysqlConfiguration#thread_pool_dedicated_listeners}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.threadPoolMaxTransactionsLimit">threadPoolMaxTransactionsLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#thread_pool_max_transactions_limit MysqlMysqlConfiguration#thread_pool_max_transactions_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#time_zone MysqlMysqlConfiguration#time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.tmpTableSize">tmpTableSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#tmp_table_size MysqlMysqlConfiguration#tmp_table_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.transactionIsolation">transactionIsolation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#transaction_isolation MysqlMysqlConfiguration#transaction_isolation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.waitTimeout">waitTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#wait_timeout MysqlMysqlConfiguration#wait_timeout}. |

---

##### `autocommit`<sup>Optional</sup> <a name="autocommit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.autocommit"></a>

```java
public java.lang.Object getAutocommit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#autocommit MysqlMysqlConfiguration#autocommit}.

---

##### `bigTables`<sup>Optional</sup> <a name="bigTables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.bigTables"></a>

```java
public java.lang.Object getBigTables();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#big_tables MysqlMysqlConfiguration#big_tables}.

---

##### `binlogExpireLogsSeconds`<sup>Optional</sup> <a name="binlogExpireLogsSeconds" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogExpireLogsSeconds"></a>

```java
public java.lang.Number getBinlogExpireLogsSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_expire_logs_seconds MysqlMysqlConfiguration#binlog_expire_logs_seconds}.

---

##### `binlogRowMetadata`<sup>Optional</sup> <a name="binlogRowMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogRowMetadata"></a>

```java
public java.lang.String getBinlogRowMetadata();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_row_metadata MysqlMysqlConfiguration#binlog_row_metadata}.

---

##### `binlogRowValueOptions`<sup>Optional</sup> <a name="binlogRowValueOptions" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogRowValueOptions"></a>

```java
public java.lang.String getBinlogRowValueOptions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_row_value_options MysqlMysqlConfiguration#binlog_row_value_options}.

---

##### `binlogTransactionCompression`<sup>Optional</sup> <a name="binlogTransactionCompression" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogTransactionCompression"></a>

```java
public java.lang.Object getBinlogTransactionCompression();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_transaction_compression MysqlMysqlConfiguration#binlog_transaction_compression}.

---

##### `completionType`<sup>Optional</sup> <a name="completionType" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.completionType"></a>

```java
public java.lang.String getCompletionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#completion_type MysqlMysqlConfiguration#completion_type}.

---

##### `connectionMemoryChunkSize`<sup>Optional</sup> <a name="connectionMemoryChunkSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectionMemoryChunkSize"></a>

```java
public java.lang.Number getConnectionMemoryChunkSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connection_memory_chunk_size MysqlMysqlConfiguration#connection_memory_chunk_size}.

---

##### `connectionMemoryLimit`<sup>Optional</sup> <a name="connectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectionMemoryLimit"></a>

```java
public java.lang.String getConnectionMemoryLimit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connection_memory_limit MysqlMysqlConfiguration#connection_memory_limit}.

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectTimeout"></a>

```java
public java.lang.Number getConnectTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connect_timeout MysqlMysqlConfiguration#connect_timeout}.

---

##### `cteMaxRecursionDepth`<sup>Optional</sup> <a name="cteMaxRecursionDepth" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.cteMaxRecursionDepth"></a>

```java
public java.lang.String getCteMaxRecursionDepth();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#cte_max_recursion_depth MysqlMysqlConfiguration#cte_max_recursion_depth}.

---

##### `defaultAuthenticationPlugin`<sup>Optional</sup> <a name="defaultAuthenticationPlugin" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.defaultAuthenticationPlugin"></a>

```java
public java.lang.String getDefaultAuthenticationPlugin();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#default_authentication_plugin MysqlMysqlConfiguration#default_authentication_plugin}.

---

##### `foreignKeyChecks`<sup>Optional</sup> <a name="foreignKeyChecks" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.foreignKeyChecks"></a>

```java
public java.lang.Object getForeignKeyChecks();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#foreign_key_checks MysqlMysqlConfiguration#foreign_key_checks}.

---

##### `generatedRandomPasswordLength`<sup>Optional</sup> <a name="generatedRandomPasswordLength" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.generatedRandomPasswordLength"></a>

```java
public java.lang.Number getGeneratedRandomPasswordLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#generated_random_password_length MysqlMysqlConfiguration#generated_random_password_length}.

---

##### `globalConnectionMemoryLimit`<sup>Optional</sup> <a name="globalConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.globalConnectionMemoryLimit"></a>

```java
public java.lang.String getGlobalConnectionMemoryLimit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#global_connection_memory_limit MysqlMysqlConfiguration#global_connection_memory_limit}.

---

##### `globalConnectionMemoryTracking`<sup>Optional</sup> <a name="globalConnectionMemoryTracking" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.globalConnectionMemoryTracking"></a>

```java
public java.lang.Object getGlobalConnectionMemoryTracking();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#global_connection_memory_tracking MysqlMysqlConfiguration#global_connection_memory_tracking}.

---

##### `groupReplicationConsistency`<sup>Optional</sup> <a name="groupReplicationConsistency" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.groupReplicationConsistency"></a>

```java
public java.lang.String getGroupReplicationConsistency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#group_replication_consistency MysqlMysqlConfiguration#group_replication_consistency}.

---

##### `informationSchemaStatsExpiry`<sup>Optional</sup> <a name="informationSchemaStatsExpiry" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.informationSchemaStatsExpiry"></a>

```java
public java.lang.Number getInformationSchemaStatsExpiry();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#information_schema_stats_expiry MysqlMysqlConfiguration#information_schema_stats_expiry}.

---

##### `innodbBufferPoolDumpPct`<sup>Optional</sup> <a name="innodbBufferPoolDumpPct" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolDumpPct"></a>

```java
public java.lang.Number getInnodbBufferPoolDumpPct();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_dump_pct MysqlMysqlConfiguration#innodb_buffer_pool_dump_pct}.

---

##### `innodbBufferPoolInstances`<sup>Optional</sup> <a name="innodbBufferPoolInstances" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolInstances"></a>

```java
public java.lang.Number getInnodbBufferPoolInstances();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_instances MysqlMysqlConfiguration#innodb_buffer_pool_instances}.

---

##### `innodbBufferPoolSize`<sup>Optional</sup> <a name="innodbBufferPoolSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolSize"></a>

```java
public java.lang.String getInnodbBufferPoolSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_size MysqlMysqlConfiguration#innodb_buffer_pool_size}.

---

##### `innodbDdlBufferSize`<sup>Optional</sup> <a name="innodbDdlBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbDdlBufferSize"></a>

```java
public java.lang.String getInnodbDdlBufferSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ddl_buffer_size MysqlMysqlConfiguration#innodb_ddl_buffer_size}.

---

##### `innodbDdlThreads`<sup>Optional</sup> <a name="innodbDdlThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbDdlThreads"></a>

```java
public java.lang.Number getInnodbDdlThreads();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ddl_threads MysqlMysqlConfiguration#innodb_ddl_threads}.

---

##### `innodbFtEnableStopword`<sup>Optional</sup> <a name="innodbFtEnableStopword" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtEnableStopword"></a>

```java
public java.lang.Object getInnodbFtEnableStopword();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_enable_stopword MysqlMysqlConfiguration#innodb_ft_enable_stopword}.

---

##### `innodbFtMaxTokenSize`<sup>Optional</sup> <a name="innodbFtMaxTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtMaxTokenSize"></a>

```java
public java.lang.Number getInnodbFtMaxTokenSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_max_token_size MysqlMysqlConfiguration#innodb_ft_max_token_size}.

---

##### `innodbFtMinTokenSize`<sup>Optional</sup> <a name="innodbFtMinTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtMinTokenSize"></a>

```java
public java.lang.Number getInnodbFtMinTokenSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_min_token_size MysqlMysqlConfiguration#innodb_ft_min_token_size}.

---

##### `innodbFtNumWordOptimize`<sup>Optional</sup> <a name="innodbFtNumWordOptimize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtNumWordOptimize"></a>

```java
public java.lang.Number getInnodbFtNumWordOptimize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_num_word_optimize MysqlMysqlConfiguration#innodb_ft_num_word_optimize}.

---

##### `innodbFtResultCacheLimit`<sup>Optional</sup> <a name="innodbFtResultCacheLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtResultCacheLimit"></a>

```java
public java.lang.String getInnodbFtResultCacheLimit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_result_cache_limit MysqlMysqlConfiguration#innodb_ft_result_cache_limit}.

---

##### `innodbFtServerStopwordTable`<sup>Optional</sup> <a name="innodbFtServerStopwordTable" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtServerStopwordTable"></a>

```java
public java.lang.String getInnodbFtServerStopwordTable();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_server_stopword_table MysqlMysqlConfiguration#innodb_ft_server_stopword_table}.

---

##### `innodbLockWaitTimeout`<sup>Optional</sup> <a name="innodbLockWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbLockWaitTimeout"></a>

```java
public java.lang.Number getInnodbLockWaitTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_lock_wait_timeout MysqlMysqlConfiguration#innodb_lock_wait_timeout}.

---

##### `innodbLogWriterThreads`<sup>Optional</sup> <a name="innodbLogWriterThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbLogWriterThreads"></a>

```java
public java.lang.Object getInnodbLogWriterThreads();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_log_writer_threads MysqlMysqlConfiguration#innodb_log_writer_threads}.

---

##### `innodbMaxPurgeLag`<sup>Optional</sup> <a name="innodbMaxPurgeLag" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbMaxPurgeLag"></a>

```java
public java.lang.String getInnodbMaxPurgeLag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag MysqlMysqlConfiguration#innodb_max_purge_lag}.

---

##### `innodbMaxPurgeLagDelay`<sup>Optional</sup> <a name="innodbMaxPurgeLagDelay" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbMaxPurgeLagDelay"></a>

```java
public java.lang.Number getInnodbMaxPurgeLagDelay();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag_delay MysqlMysqlConfiguration#innodb_max_purge_lag_delay}.

---

##### `innodbStatsPersistentSamplePages`<sup>Optional</sup> <a name="innodbStatsPersistentSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbStatsPersistentSamplePages"></a>

```java
public java.lang.String getInnodbStatsPersistentSamplePages();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_stats_persistent_sample_pages MysqlMysqlConfiguration#innodb_stats_persistent_sample_pages}.

---

##### `innodbStatsTransientSamplePages`<sup>Optional</sup> <a name="innodbStatsTransientSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbStatsTransientSamplePages"></a>

```java
public java.lang.String getInnodbStatsTransientSamplePages();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_stats_transient_sample_pages MysqlMysqlConfiguration#innodb_stats_transient_sample_pages}.

---

##### `interactiveTimeout`<sup>Optional</sup> <a name="interactiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.interactiveTimeout"></a>

```java
public java.lang.Number getInteractiveTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#interactive_timeout MysqlMysqlConfiguration#interactive_timeout}.

---

##### `localInfile`<sup>Optional</sup> <a name="localInfile" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.localInfile"></a>

```java
public java.lang.Object getLocalInfile();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#local_infile MysqlMysqlConfiguration#local_infile}.

---

##### `mandatoryRoles`<sup>Optional</sup> <a name="mandatoryRoles" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mandatoryRoles"></a>

```java
public java.lang.String getMandatoryRoles();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mandatory_roles MysqlMysqlConfiguration#mandatory_roles}.

---

##### `maxAllowedPacket`<sup>Optional</sup> <a name="maxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxAllowedPacket"></a>

```java
public java.lang.Number getMaxAllowedPacket();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_allowed_packet MysqlMysqlConfiguration#max_allowed_packet}.

---

##### `maxBinlogCacheSize`<sup>Optional</sup> <a name="maxBinlogCacheSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxBinlogCacheSize"></a>

```java
public java.lang.String getMaxBinlogCacheSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_binlog_cache_size MysqlMysqlConfiguration#max_binlog_cache_size}.

---

##### `maxConnectErrors`<sup>Optional</sup> <a name="maxConnectErrors" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxConnectErrors"></a>

```java
public java.lang.String getMaxConnectErrors();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_connect_errors MysqlMysqlConfiguration#max_connect_errors}.

---

##### `maxConnections`<sup>Optional</sup> <a name="maxConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxConnections"></a>

```java
public java.lang.Number getMaxConnections();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_connections MysqlMysqlConfiguration#max_connections}.

---

##### `maxExecutionTime`<sup>Optional</sup> <a name="maxExecutionTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxExecutionTime"></a>

```java
public java.lang.String getMaxExecutionTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_execution_time MysqlMysqlConfiguration#max_execution_time}.

---

##### `maxHeapTableSize`<sup>Optional</sup> <a name="maxHeapTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxHeapTableSize"></a>

```java
public java.lang.String getMaxHeapTableSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_heap_table_size MysqlMysqlConfiguration#max_heap_table_size}.

---

##### `maxPreparedStmtCount`<sup>Optional</sup> <a name="maxPreparedStmtCount" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxPreparedStmtCount"></a>

```java
public java.lang.Number getMaxPreparedStmtCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_prepared_stmt_count MysqlMysqlConfiguration#max_prepared_stmt_count}.

---

##### `mysqlFirewallMode`<sup>Optional</sup> <a name="mysqlFirewallMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlFirewallMode"></a>

```java
public java.lang.Object getMysqlFirewallMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysql_firewall_mode MysqlMysqlConfiguration#mysql_firewall_mode}.

---

##### `mysqlxConnectTimeout`<sup>Optional</sup> <a name="mysqlxConnectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxConnectTimeout"></a>

```java
public java.lang.Number getMysqlxConnectTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_connect_timeout MysqlMysqlConfiguration#mysqlx_connect_timeout}.

---

##### `mysqlxDeflateDefaultCompressionLevel`<sup>Optional</sup> <a name="mysqlxDeflateDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDeflateDefaultCompressionLevel"></a>

```java
public java.lang.Number getMysqlxDeflateDefaultCompressionLevel();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_default_compression_level MysqlMysqlConfiguration#mysqlx_deflate_default_compression_level}.

---

##### `mysqlxDeflateMaxClientCompressionLevel`<sup>Optional</sup> <a name="mysqlxDeflateMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDeflateMaxClientCompressionLevel"></a>

```java
public java.lang.Number getMysqlxDeflateMaxClientCompressionLevel();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_max_client_compression_level MysqlMysqlConfiguration#mysqlx_deflate_max_client_compression_level}.

---

##### `mysqlxDocumentIdUniquePrefix`<sup>Optional</sup> <a name="mysqlxDocumentIdUniquePrefix" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDocumentIdUniquePrefix"></a>

```java
public java.lang.Number getMysqlxDocumentIdUniquePrefix();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_document_id_unique_prefix MysqlMysqlConfiguration#mysqlx_document_id_unique_prefix}.

---

##### `mysqlxEnableHelloNotice`<sup>Optional</sup> <a name="mysqlxEnableHelloNotice" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxEnableHelloNotice"></a>

```java
public java.lang.Object getMysqlxEnableHelloNotice();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_enable_hello_notice MysqlMysqlConfiguration#mysqlx_enable_hello_notice}.

---

##### `mysqlxIdleWorkerThreadTimeout`<sup>Optional</sup> <a name="mysqlxIdleWorkerThreadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxIdleWorkerThreadTimeout"></a>

```java
public java.lang.Number getMysqlxIdleWorkerThreadTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_idle_worker_thread_timeout MysqlMysqlConfiguration#mysqlx_idle_worker_thread_timeout}.

---

##### `mysqlxInteractiveTimeout`<sup>Optional</sup> <a name="mysqlxInteractiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxInteractiveTimeout"></a>

```java
public java.lang.Number getMysqlxInteractiveTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_interactive_timeout MysqlMysqlConfiguration#mysqlx_interactive_timeout}.

---

##### `mysqlxLz4DefaultCompressionLevel`<sup>Optional</sup> <a name="mysqlxLz4DefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxLz4DefaultCompressionLevel"></a>

```java
public java.lang.Number getMysqlxLz4DefaultCompressionLevel();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4default_compression_level MysqlMysqlConfiguration#mysqlx_lz4default_compression_level}.

---

##### `mysqlxLz4MaxClientCompressionLevel`<sup>Optional</sup> <a name="mysqlxLz4MaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxLz4MaxClientCompressionLevel"></a>

```java
public java.lang.Number getMysqlxLz4MaxClientCompressionLevel();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4max_client_compression_level MysqlMysqlConfiguration#mysqlx_lz4max_client_compression_level}.

---

##### `mysqlxMaxAllowedPacket`<sup>Optional</sup> <a name="mysqlxMaxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxMaxAllowedPacket"></a>

```java
public java.lang.Number getMysqlxMaxAllowedPacket();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_max_allowed_packet MysqlMysqlConfiguration#mysqlx_max_allowed_packet}.

---

##### `mysqlxMinWorkerThreads`<sup>Optional</sup> <a name="mysqlxMinWorkerThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxMinWorkerThreads"></a>

```java
public java.lang.Number getMysqlxMinWorkerThreads();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_min_worker_threads MysqlMysqlConfiguration#mysqlx_min_worker_threads}.

---

##### `mysqlxReadTimeout`<sup>Optional</sup> <a name="mysqlxReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxReadTimeout"></a>

```java
public java.lang.Number getMysqlxReadTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_read_timeout MysqlMysqlConfiguration#mysqlx_read_timeout}.

---

##### `mysqlxWaitTimeout`<sup>Optional</sup> <a name="mysqlxWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxWaitTimeout"></a>

```java
public java.lang.Number getMysqlxWaitTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_wait_timeout MysqlMysqlConfiguration#mysqlx_wait_timeout}.

---

##### `mysqlxWriteTimeout`<sup>Optional</sup> <a name="mysqlxWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxWriteTimeout"></a>

```java
public java.lang.Number getMysqlxWriteTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_write_timeout MysqlMysqlConfiguration#mysqlx_write_timeout}.

---

##### `mysqlxZstdDefaultCompressionLevel`<sup>Optional</sup> <a name="mysqlxZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxZstdDefaultCompressionLevel"></a>

```java
public java.lang.Number getMysqlxZstdDefaultCompressionLevel();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_default_compression_level MysqlMysqlConfiguration#mysqlx_zstd_default_compression_level}.

---

##### `mysqlxZstdMaxClientCompressionLevel`<sup>Optional</sup> <a name="mysqlxZstdMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxZstdMaxClientCompressionLevel"></a>

```java
public java.lang.Number getMysqlxZstdMaxClientCompressionLevel();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_max_client_compression_level MysqlMysqlConfiguration#mysqlx_zstd_max_client_compression_level}.

---

##### `mysqlZstdDefaultCompressionLevel`<sup>Optional</sup> <a name="mysqlZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlZstdDefaultCompressionLevel"></a>

```java
public java.lang.Number getMysqlZstdDefaultCompressionLevel();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysql_zstd_default_compression_level MysqlMysqlConfiguration#mysql_zstd_default_compression_level}.

---

##### `netReadTimeout`<sup>Optional</sup> <a name="netReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.netReadTimeout"></a>

```java
public java.lang.Number getNetReadTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#net_read_timeout MysqlMysqlConfiguration#net_read_timeout}.

---

##### `netWriteTimeout`<sup>Optional</sup> <a name="netWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.netWriteTimeout"></a>

```java
public java.lang.Number getNetWriteTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#net_write_timeout MysqlMysqlConfiguration#net_write_timeout}.

---

##### `parserMaxMemSize`<sup>Optional</sup> <a name="parserMaxMemSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.parserMaxMemSize"></a>

```java
public java.lang.String getParserMaxMemSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parser_max_mem_size MysqlMysqlConfiguration#parser_max_mem_size}.

---

##### `queryAllocBlockSize`<sup>Optional</sup> <a name="queryAllocBlockSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.queryAllocBlockSize"></a>

```java
public java.lang.String getQueryAllocBlockSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#query_alloc_block_size MysqlMysqlConfiguration#query_alloc_block_size}.

---

##### `queryPreallocSize`<sup>Optional</sup> <a name="queryPreallocSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.queryPreallocSize"></a>

```java
public java.lang.String getQueryPreallocSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#query_prealloc_size MysqlMysqlConfiguration#query_prealloc_size}.

---

##### `regexpTimeLimit`<sup>Optional</sup> <a name="regexpTimeLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.regexpTimeLimit"></a>

```java
public java.lang.Number getRegexpTimeLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#regexp_time_limit MysqlMysqlConfiguration#regexp_time_limit}.

---

##### `sortBufferSize`<sup>Optional</sup> <a name="sortBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sortBufferSize"></a>

```java
public java.lang.String getSortBufferSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sort_buffer_size MysqlMysqlConfiguration#sort_buffer_size}.

---

##### `sqlMode`<sup>Optional</sup> <a name="sqlMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlMode"></a>

```java
public java.lang.String getSqlMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_mode MysqlMysqlConfiguration#sql_mode}.

---

##### `sqlRequirePrimaryKey`<sup>Optional</sup> <a name="sqlRequirePrimaryKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlRequirePrimaryKey"></a>

```java
public java.lang.Object getSqlRequirePrimaryKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_require_primary_key MysqlMysqlConfiguration#sql_require_primary_key}.

---

##### `sqlWarnings`<sup>Optional</sup> <a name="sqlWarnings" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlWarnings"></a>

```java
public java.lang.Object getSqlWarnings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_warnings MysqlMysqlConfiguration#sql_warnings}.

---

##### `threadPoolDedicatedListeners`<sup>Optional</sup> <a name="threadPoolDedicatedListeners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.threadPoolDedicatedListeners"></a>

```java
public java.lang.Object getThreadPoolDedicatedListeners();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#thread_pool_dedicated_listeners MysqlMysqlConfiguration#thread_pool_dedicated_listeners}.

---

##### `threadPoolMaxTransactionsLimit`<sup>Optional</sup> <a name="threadPoolMaxTransactionsLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.threadPoolMaxTransactionsLimit"></a>

```java
public java.lang.Number getThreadPoolMaxTransactionsLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#thread_pool_max_transactions_limit MysqlMysqlConfiguration#thread_pool_max_transactions_limit}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#time_zone MysqlMysqlConfiguration#time_zone}.

---

##### `tmpTableSize`<sup>Optional</sup> <a name="tmpTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.tmpTableSize"></a>

```java
public java.lang.String getTmpTableSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#tmp_table_size MysqlMysqlConfiguration#tmp_table_size}.

---

##### `transactionIsolation`<sup>Optional</sup> <a name="transactionIsolation" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.transactionIsolation"></a>

```java
public java.lang.String getTransactionIsolation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#transaction_isolation MysqlMysqlConfiguration#transaction_isolation}.

---

##### `waitTimeout`<sup>Optional</sup> <a name="waitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.waitTimeout"></a>

```java
public java.lang.Number getWaitTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#wait_timeout MysqlMysqlConfiguration#wait_timeout}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlMysqlConfigurationInitVariablesOutputReference <a name="MysqlMysqlConfigurationInitVariablesOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_configuration.MysqlMysqlConfigurationInitVariablesOutputReference;

new MysqlMysqlConfigurationInitVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resetLowerCaseTableNames">resetLowerCaseTableNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLowerCaseTableNames` <a name="resetLowerCaseTableNames" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resetLowerCaseTableNames"></a>

```java
public void resetLowerCaseTableNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNamesInput">lowerCaseTableNamesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNames">lowerCaseTableNames</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lowerCaseTableNamesInput`<sup>Optional</sup> <a name="lowerCaseTableNamesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNamesInput"></a>

```java
public java.lang.String getLowerCaseTableNamesInput();
```

- *Type:* java.lang.String

---

##### `lowerCaseTableNames`<sup>Required</sup> <a name="lowerCaseTableNames" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNames"></a>

```java
public java.lang.String getLowerCaseTableNames();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.internalValue"></a>

```java
public MysqlMysqlConfigurationInitVariables getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a>

---


### MysqlMysqlConfigurationTimeoutsOutputReference <a name="MysqlMysqlConfigurationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_configuration.MysqlMysqlConfigurationTimeoutsOutputReference;

new MysqlMysqlConfigurationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a>

---


### MysqlMysqlConfigurationVariablesOutputReference <a name="MysqlMysqlConfigurationVariablesOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.mysql_mysql_configuration.MysqlMysqlConfigurationVariablesOutputReference;

new MysqlMysqlConfigurationVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetAutocommit">resetAutocommit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBigTables">resetBigTables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogExpireLogsSeconds">resetBinlogExpireLogsSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogRowMetadata">resetBinlogRowMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogRowValueOptions">resetBinlogRowValueOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogTransactionCompression">resetBinlogTransactionCompression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetCompletionType">resetCompletionType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectionMemoryChunkSize">resetConnectionMemoryChunkSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectionMemoryLimit">resetConnectionMemoryLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectTimeout">resetConnectTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetCteMaxRecursionDepth">resetCteMaxRecursionDepth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetDefaultAuthenticationPlugin">resetDefaultAuthenticationPlugin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetForeignKeyChecks">resetForeignKeyChecks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGeneratedRandomPasswordLength">resetGeneratedRandomPasswordLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGlobalConnectionMemoryLimit">resetGlobalConnectionMemoryLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGlobalConnectionMemoryTracking">resetGlobalConnectionMemoryTracking</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGroupReplicationConsistency">resetGroupReplicationConsistency</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInformationSchemaStatsExpiry">resetInformationSchemaStatsExpiry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolDumpPct">resetInnodbBufferPoolDumpPct</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolInstances">resetInnodbBufferPoolInstances</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolSize">resetInnodbBufferPoolSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbDdlBufferSize">resetInnodbDdlBufferSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbDdlThreads">resetInnodbDdlThreads</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtEnableStopword">resetInnodbFtEnableStopword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtMaxTokenSize">resetInnodbFtMaxTokenSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtMinTokenSize">resetInnodbFtMinTokenSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtNumWordOptimize">resetInnodbFtNumWordOptimize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtResultCacheLimit">resetInnodbFtResultCacheLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtServerStopwordTable">resetInnodbFtServerStopwordTable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbLockWaitTimeout">resetInnodbLockWaitTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbLogWriterThreads">resetInnodbLogWriterThreads</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbMaxPurgeLag">resetInnodbMaxPurgeLag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbMaxPurgeLagDelay">resetInnodbMaxPurgeLagDelay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbStatsPersistentSamplePages">resetInnodbStatsPersistentSamplePages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbStatsTransientSamplePages">resetInnodbStatsTransientSamplePages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInteractiveTimeout">resetInteractiveTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetLocalInfile">resetLocalInfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMandatoryRoles">resetMandatoryRoles</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxAllowedPacket">resetMaxAllowedPacket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxBinlogCacheSize">resetMaxBinlogCacheSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxConnectErrors">resetMaxConnectErrors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxConnections">resetMaxConnections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxExecutionTime">resetMaxExecutionTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxHeapTableSize">resetMaxHeapTableSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxPreparedStmtCount">resetMaxPreparedStmtCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlFirewallMode">resetMysqlFirewallMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxConnectTimeout">resetMysqlxConnectTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDeflateDefaultCompressionLevel">resetMysqlxDeflateDefaultCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDeflateMaxClientCompressionLevel">resetMysqlxDeflateMaxClientCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDocumentIdUniquePrefix">resetMysqlxDocumentIdUniquePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxEnableHelloNotice">resetMysqlxEnableHelloNotice</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxIdleWorkerThreadTimeout">resetMysqlxIdleWorkerThreadTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxInteractiveTimeout">resetMysqlxInteractiveTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxLz4DefaultCompressionLevel">resetMysqlxLz4DefaultCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxLz4MaxClientCompressionLevel">resetMysqlxLz4MaxClientCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxMaxAllowedPacket">resetMysqlxMaxAllowedPacket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxMinWorkerThreads">resetMysqlxMinWorkerThreads</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxReadTimeout">resetMysqlxReadTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxWaitTimeout">resetMysqlxWaitTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxWriteTimeout">resetMysqlxWriteTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxZstdDefaultCompressionLevel">resetMysqlxZstdDefaultCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxZstdMaxClientCompressionLevel">resetMysqlxZstdMaxClientCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlZstdDefaultCompressionLevel">resetMysqlZstdDefaultCompressionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetNetReadTimeout">resetNetReadTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetNetWriteTimeout">resetNetWriteTimeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetParserMaxMemSize">resetParserMaxMemSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetQueryAllocBlockSize">resetQueryAllocBlockSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetQueryPreallocSize">resetQueryPreallocSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetRegexpTimeLimit">resetRegexpTimeLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSortBufferSize">resetSortBufferSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlMode">resetSqlMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlRequirePrimaryKey">resetSqlRequirePrimaryKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlWarnings">resetSqlWarnings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetThreadPoolDedicatedListeners">resetThreadPoolDedicatedListeners</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetThreadPoolMaxTransactionsLimit">resetThreadPoolMaxTransactionsLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTmpTableSize">resetTmpTableSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTransactionIsolation">resetTransactionIsolation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetWaitTimeout">resetWaitTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutocommit` <a name="resetAutocommit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetAutocommit"></a>

```java
public void resetAutocommit()
```

##### `resetBigTables` <a name="resetBigTables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBigTables"></a>

```java
public void resetBigTables()
```

##### `resetBinlogExpireLogsSeconds` <a name="resetBinlogExpireLogsSeconds" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogExpireLogsSeconds"></a>

```java
public void resetBinlogExpireLogsSeconds()
```

##### `resetBinlogRowMetadata` <a name="resetBinlogRowMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogRowMetadata"></a>

```java
public void resetBinlogRowMetadata()
```

##### `resetBinlogRowValueOptions` <a name="resetBinlogRowValueOptions" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogRowValueOptions"></a>

```java
public void resetBinlogRowValueOptions()
```

##### `resetBinlogTransactionCompression` <a name="resetBinlogTransactionCompression" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogTransactionCompression"></a>

```java
public void resetBinlogTransactionCompression()
```

##### `resetCompletionType` <a name="resetCompletionType" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetCompletionType"></a>

```java
public void resetCompletionType()
```

##### `resetConnectionMemoryChunkSize` <a name="resetConnectionMemoryChunkSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectionMemoryChunkSize"></a>

```java
public void resetConnectionMemoryChunkSize()
```

##### `resetConnectionMemoryLimit` <a name="resetConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectionMemoryLimit"></a>

```java
public void resetConnectionMemoryLimit()
```

##### `resetConnectTimeout` <a name="resetConnectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectTimeout"></a>

```java
public void resetConnectTimeout()
```

##### `resetCteMaxRecursionDepth` <a name="resetCteMaxRecursionDepth" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetCteMaxRecursionDepth"></a>

```java
public void resetCteMaxRecursionDepth()
```

##### `resetDefaultAuthenticationPlugin` <a name="resetDefaultAuthenticationPlugin" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetDefaultAuthenticationPlugin"></a>

```java
public void resetDefaultAuthenticationPlugin()
```

##### `resetForeignKeyChecks` <a name="resetForeignKeyChecks" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetForeignKeyChecks"></a>

```java
public void resetForeignKeyChecks()
```

##### `resetGeneratedRandomPasswordLength` <a name="resetGeneratedRandomPasswordLength" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGeneratedRandomPasswordLength"></a>

```java
public void resetGeneratedRandomPasswordLength()
```

##### `resetGlobalConnectionMemoryLimit` <a name="resetGlobalConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGlobalConnectionMemoryLimit"></a>

```java
public void resetGlobalConnectionMemoryLimit()
```

##### `resetGlobalConnectionMemoryTracking` <a name="resetGlobalConnectionMemoryTracking" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGlobalConnectionMemoryTracking"></a>

```java
public void resetGlobalConnectionMemoryTracking()
```

##### `resetGroupReplicationConsistency` <a name="resetGroupReplicationConsistency" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGroupReplicationConsistency"></a>

```java
public void resetGroupReplicationConsistency()
```

##### `resetInformationSchemaStatsExpiry` <a name="resetInformationSchemaStatsExpiry" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInformationSchemaStatsExpiry"></a>

```java
public void resetInformationSchemaStatsExpiry()
```

##### `resetInnodbBufferPoolDumpPct` <a name="resetInnodbBufferPoolDumpPct" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolDumpPct"></a>

```java
public void resetInnodbBufferPoolDumpPct()
```

##### `resetInnodbBufferPoolInstances` <a name="resetInnodbBufferPoolInstances" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolInstances"></a>

```java
public void resetInnodbBufferPoolInstances()
```

##### `resetInnodbBufferPoolSize` <a name="resetInnodbBufferPoolSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolSize"></a>

```java
public void resetInnodbBufferPoolSize()
```

##### `resetInnodbDdlBufferSize` <a name="resetInnodbDdlBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbDdlBufferSize"></a>

```java
public void resetInnodbDdlBufferSize()
```

##### `resetInnodbDdlThreads` <a name="resetInnodbDdlThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbDdlThreads"></a>

```java
public void resetInnodbDdlThreads()
```

##### `resetInnodbFtEnableStopword` <a name="resetInnodbFtEnableStopword" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtEnableStopword"></a>

```java
public void resetInnodbFtEnableStopword()
```

##### `resetInnodbFtMaxTokenSize` <a name="resetInnodbFtMaxTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtMaxTokenSize"></a>

```java
public void resetInnodbFtMaxTokenSize()
```

##### `resetInnodbFtMinTokenSize` <a name="resetInnodbFtMinTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtMinTokenSize"></a>

```java
public void resetInnodbFtMinTokenSize()
```

##### `resetInnodbFtNumWordOptimize` <a name="resetInnodbFtNumWordOptimize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtNumWordOptimize"></a>

```java
public void resetInnodbFtNumWordOptimize()
```

##### `resetInnodbFtResultCacheLimit` <a name="resetInnodbFtResultCacheLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtResultCacheLimit"></a>

```java
public void resetInnodbFtResultCacheLimit()
```

##### `resetInnodbFtServerStopwordTable` <a name="resetInnodbFtServerStopwordTable" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtServerStopwordTable"></a>

```java
public void resetInnodbFtServerStopwordTable()
```

##### `resetInnodbLockWaitTimeout` <a name="resetInnodbLockWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbLockWaitTimeout"></a>

```java
public void resetInnodbLockWaitTimeout()
```

##### `resetInnodbLogWriterThreads` <a name="resetInnodbLogWriterThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbLogWriterThreads"></a>

```java
public void resetInnodbLogWriterThreads()
```

##### `resetInnodbMaxPurgeLag` <a name="resetInnodbMaxPurgeLag" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbMaxPurgeLag"></a>

```java
public void resetInnodbMaxPurgeLag()
```

##### `resetInnodbMaxPurgeLagDelay` <a name="resetInnodbMaxPurgeLagDelay" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbMaxPurgeLagDelay"></a>

```java
public void resetInnodbMaxPurgeLagDelay()
```

##### `resetInnodbStatsPersistentSamplePages` <a name="resetInnodbStatsPersistentSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbStatsPersistentSamplePages"></a>

```java
public void resetInnodbStatsPersistentSamplePages()
```

##### `resetInnodbStatsTransientSamplePages` <a name="resetInnodbStatsTransientSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbStatsTransientSamplePages"></a>

```java
public void resetInnodbStatsTransientSamplePages()
```

##### `resetInteractiveTimeout` <a name="resetInteractiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInteractiveTimeout"></a>

```java
public void resetInteractiveTimeout()
```

##### `resetLocalInfile` <a name="resetLocalInfile" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetLocalInfile"></a>

```java
public void resetLocalInfile()
```

##### `resetMandatoryRoles` <a name="resetMandatoryRoles" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMandatoryRoles"></a>

```java
public void resetMandatoryRoles()
```

##### `resetMaxAllowedPacket` <a name="resetMaxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxAllowedPacket"></a>

```java
public void resetMaxAllowedPacket()
```

##### `resetMaxBinlogCacheSize` <a name="resetMaxBinlogCacheSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxBinlogCacheSize"></a>

```java
public void resetMaxBinlogCacheSize()
```

##### `resetMaxConnectErrors` <a name="resetMaxConnectErrors" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxConnectErrors"></a>

```java
public void resetMaxConnectErrors()
```

##### `resetMaxConnections` <a name="resetMaxConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxConnections"></a>

```java
public void resetMaxConnections()
```

##### `resetMaxExecutionTime` <a name="resetMaxExecutionTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxExecutionTime"></a>

```java
public void resetMaxExecutionTime()
```

##### `resetMaxHeapTableSize` <a name="resetMaxHeapTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxHeapTableSize"></a>

```java
public void resetMaxHeapTableSize()
```

##### `resetMaxPreparedStmtCount` <a name="resetMaxPreparedStmtCount" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxPreparedStmtCount"></a>

```java
public void resetMaxPreparedStmtCount()
```

##### `resetMysqlFirewallMode` <a name="resetMysqlFirewallMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlFirewallMode"></a>

```java
public void resetMysqlFirewallMode()
```

##### `resetMysqlxConnectTimeout` <a name="resetMysqlxConnectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxConnectTimeout"></a>

```java
public void resetMysqlxConnectTimeout()
```

##### `resetMysqlxDeflateDefaultCompressionLevel` <a name="resetMysqlxDeflateDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDeflateDefaultCompressionLevel"></a>

```java
public void resetMysqlxDeflateDefaultCompressionLevel()
```

##### `resetMysqlxDeflateMaxClientCompressionLevel` <a name="resetMysqlxDeflateMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDeflateMaxClientCompressionLevel"></a>

```java
public void resetMysqlxDeflateMaxClientCompressionLevel()
```

##### `resetMysqlxDocumentIdUniquePrefix` <a name="resetMysqlxDocumentIdUniquePrefix" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDocumentIdUniquePrefix"></a>

```java
public void resetMysqlxDocumentIdUniquePrefix()
```

##### `resetMysqlxEnableHelloNotice` <a name="resetMysqlxEnableHelloNotice" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxEnableHelloNotice"></a>

```java
public void resetMysqlxEnableHelloNotice()
```

##### `resetMysqlxIdleWorkerThreadTimeout` <a name="resetMysqlxIdleWorkerThreadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxIdleWorkerThreadTimeout"></a>

```java
public void resetMysqlxIdleWorkerThreadTimeout()
```

##### `resetMysqlxInteractiveTimeout` <a name="resetMysqlxInteractiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxInteractiveTimeout"></a>

```java
public void resetMysqlxInteractiveTimeout()
```

##### `resetMysqlxLz4DefaultCompressionLevel` <a name="resetMysqlxLz4DefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxLz4DefaultCompressionLevel"></a>

```java
public void resetMysqlxLz4DefaultCompressionLevel()
```

##### `resetMysqlxLz4MaxClientCompressionLevel` <a name="resetMysqlxLz4MaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxLz4MaxClientCompressionLevel"></a>

```java
public void resetMysqlxLz4MaxClientCompressionLevel()
```

##### `resetMysqlxMaxAllowedPacket` <a name="resetMysqlxMaxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxMaxAllowedPacket"></a>

```java
public void resetMysqlxMaxAllowedPacket()
```

##### `resetMysqlxMinWorkerThreads` <a name="resetMysqlxMinWorkerThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxMinWorkerThreads"></a>

```java
public void resetMysqlxMinWorkerThreads()
```

##### `resetMysqlxReadTimeout` <a name="resetMysqlxReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxReadTimeout"></a>

```java
public void resetMysqlxReadTimeout()
```

##### `resetMysqlxWaitTimeout` <a name="resetMysqlxWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxWaitTimeout"></a>

```java
public void resetMysqlxWaitTimeout()
```

##### `resetMysqlxWriteTimeout` <a name="resetMysqlxWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxWriteTimeout"></a>

```java
public void resetMysqlxWriteTimeout()
```

##### `resetMysqlxZstdDefaultCompressionLevel` <a name="resetMysqlxZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxZstdDefaultCompressionLevel"></a>

```java
public void resetMysqlxZstdDefaultCompressionLevel()
```

##### `resetMysqlxZstdMaxClientCompressionLevel` <a name="resetMysqlxZstdMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxZstdMaxClientCompressionLevel"></a>

```java
public void resetMysqlxZstdMaxClientCompressionLevel()
```

##### `resetMysqlZstdDefaultCompressionLevel` <a name="resetMysqlZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlZstdDefaultCompressionLevel"></a>

```java
public void resetMysqlZstdDefaultCompressionLevel()
```

##### `resetNetReadTimeout` <a name="resetNetReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetNetReadTimeout"></a>

```java
public void resetNetReadTimeout()
```

##### `resetNetWriteTimeout` <a name="resetNetWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetNetWriteTimeout"></a>

```java
public void resetNetWriteTimeout()
```

##### `resetParserMaxMemSize` <a name="resetParserMaxMemSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetParserMaxMemSize"></a>

```java
public void resetParserMaxMemSize()
```

##### `resetQueryAllocBlockSize` <a name="resetQueryAllocBlockSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetQueryAllocBlockSize"></a>

```java
public void resetQueryAllocBlockSize()
```

##### `resetQueryPreallocSize` <a name="resetQueryPreallocSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetQueryPreallocSize"></a>

```java
public void resetQueryPreallocSize()
```

##### `resetRegexpTimeLimit` <a name="resetRegexpTimeLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetRegexpTimeLimit"></a>

```java
public void resetRegexpTimeLimit()
```

##### `resetSortBufferSize` <a name="resetSortBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSortBufferSize"></a>

```java
public void resetSortBufferSize()
```

##### `resetSqlMode` <a name="resetSqlMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlMode"></a>

```java
public void resetSqlMode()
```

##### `resetSqlRequirePrimaryKey` <a name="resetSqlRequirePrimaryKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlRequirePrimaryKey"></a>

```java
public void resetSqlRequirePrimaryKey()
```

##### `resetSqlWarnings` <a name="resetSqlWarnings" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlWarnings"></a>

```java
public void resetSqlWarnings()
```

##### `resetThreadPoolDedicatedListeners` <a name="resetThreadPoolDedicatedListeners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetThreadPoolDedicatedListeners"></a>

```java
public void resetThreadPoolDedicatedListeners()
```

##### `resetThreadPoolMaxTransactionsLimit` <a name="resetThreadPoolMaxTransactionsLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetThreadPoolMaxTransactionsLimit"></a>

```java
public void resetThreadPoolMaxTransactionsLimit()
```

##### `resetTimeZone` <a name="resetTimeZone" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```

##### `resetTmpTableSize` <a name="resetTmpTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTmpTableSize"></a>

```java
public void resetTmpTableSize()
```

##### `resetTransactionIsolation` <a name="resetTransactionIsolation" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTransactionIsolation"></a>

```java
public void resetTransactionIsolation()
```

##### `resetWaitTimeout` <a name="resetWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetWaitTimeout"></a>

```java
public void resetWaitTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.autocommitInput">autocommitInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.bigTablesInput">bigTablesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSecondsInput">binlogExpireLogsSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadataInput">binlogRowMetadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptionsInput">binlogRowValueOptionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompressionInput">binlogTransactionCompressionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.completionTypeInput">completionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSizeInput">connectionMemoryChunkSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimitInput">connectionMemoryLimitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectTimeoutInput">connectTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepthInput">cteMaxRecursionDepthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPluginInput">defaultAuthenticationPluginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecksInput">foreignKeyChecksInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLengthInput">generatedRandomPasswordLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimitInput">globalConnectionMemoryLimitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTrackingInput">globalConnectionMemoryTrackingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistencyInput">groupReplicationConsistencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiryInput">informationSchemaStatsExpiryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPctInput">innodbBufferPoolDumpPctInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstancesInput">innodbBufferPoolInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSizeInput">innodbBufferPoolSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSizeInput">innodbDdlBufferSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreadsInput">innodbDdlThreadsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopwordInput">innodbFtEnableStopwordInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSizeInput">innodbFtMaxTokenSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSizeInput">innodbFtMinTokenSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimizeInput">innodbFtNumWordOptimizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimitInput">innodbFtResultCacheLimitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTableInput">innodbFtServerStopwordTableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeoutInput">innodbLockWaitTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreadsInput">innodbLogWriterThreadsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelayInput">innodbMaxPurgeLagDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagInput">innodbMaxPurgeLagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePagesInput">innodbStatsPersistentSamplePagesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePagesInput">innodbStatsTransientSamplePagesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeoutInput">interactiveTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.localInfileInput">localInfileInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRolesInput">mandatoryRolesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacketInput">maxAllowedPacketInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSizeInput">maxBinlogCacheSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrorsInput">maxConnectErrorsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectionsInput">maxConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTimeInput">maxExecutionTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSizeInput">maxHeapTableSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCountInput">maxPreparedStmtCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallModeInput">mysqlFirewallModeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeoutInput">mysqlxConnectTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevelInput">mysqlxDeflateDefaultCompressionLevelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevelInput">mysqlxDeflateMaxClientCompressionLevelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefixInput">mysqlxDocumentIdUniquePrefixInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNoticeInput">mysqlxEnableHelloNoticeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeoutInput">mysqlxIdleWorkerThreadTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeoutInput">mysqlxInteractiveTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevelInput">mysqlxLz4DefaultCompressionLevelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevelInput">mysqlxLz4MaxClientCompressionLevelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacketInput">mysqlxMaxAllowedPacketInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreadsInput">mysqlxMinWorkerThreadsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeoutInput">mysqlxReadTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeoutInput">mysqlxWaitTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeoutInput">mysqlxWriteTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevelInput">mysqlxZstdDefaultCompressionLevelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevelInput">mysqlxZstdMaxClientCompressionLevelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevelInput">mysqlZstdDefaultCompressionLevelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeoutInput">netReadTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeoutInput">netWriteTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSizeInput">parserMaxMemSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSizeInput">queryAllocBlockSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSizeInput">queryPreallocSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimitInput">regexpTimeLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSizeInput">sortBufferSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlModeInput">sqlModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKeyInput">sqlRequirePrimaryKeyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlWarningsInput">sqlWarningsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListenersInput">threadPoolDedicatedListenersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimitInput">threadPoolMaxTransactionsLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSizeInput">tmpTableSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolationInput">transactionIsolationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.waitTimeoutInput">waitTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.autocommit">autocommit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.bigTables">bigTables</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSeconds">binlogExpireLogsSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadata">binlogRowMetadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptions">binlogRowValueOptions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompression">binlogTransactionCompression</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.completionType">completionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSize">connectionMemoryChunkSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimit">connectionMemoryLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectTimeout">connectTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepth">cteMaxRecursionDepth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPlugin">defaultAuthenticationPlugin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecks">foreignKeyChecks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLength">generatedRandomPasswordLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimit">globalConnectionMemoryLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTracking">globalConnectionMemoryTracking</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistency">groupReplicationConsistency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiry">informationSchemaStatsExpiry</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPct">innodbBufferPoolDumpPct</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstances">innodbBufferPoolInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSize">innodbBufferPoolSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSize">innodbDdlBufferSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreads">innodbDdlThreads</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopword">innodbFtEnableStopword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSize">innodbFtMaxTokenSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSize">innodbFtMinTokenSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimize">innodbFtNumWordOptimize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimit">innodbFtResultCacheLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTable">innodbFtServerStopwordTable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeout">innodbLockWaitTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreads">innodbLogWriterThreads</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLag">innodbMaxPurgeLag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelay">innodbMaxPurgeLagDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePages">innodbStatsPersistentSamplePages</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePages">innodbStatsTransientSamplePages</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeout">interactiveTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.localInfile">localInfile</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRoles">mandatoryRoles</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacket">maxAllowedPacket</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSize">maxBinlogCacheSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrors">maxConnectErrors</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnections">maxConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTime">maxExecutionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSize">maxHeapTableSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCount">maxPreparedStmtCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallMode">mysqlFirewallMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeout">mysqlxConnectTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel">mysqlxDeflateDefaultCompressionLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel">mysqlxDeflateMaxClientCompressionLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix">mysqlxDocumentIdUniquePrefix</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNotice">mysqlxEnableHelloNotice</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout">mysqlxIdleWorkerThreadTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeout">mysqlxInteractiveTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel">mysqlxLz4DefaultCompressionLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel">mysqlxLz4MaxClientCompressionLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacket">mysqlxMaxAllowedPacket</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreads">mysqlxMinWorkerThreads</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeout">mysqlxReadTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeout">mysqlxWaitTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeout">mysqlxWriteTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel">mysqlxZstdDefaultCompressionLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel">mysqlxZstdMaxClientCompressionLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel">mysqlZstdDefaultCompressionLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeout">netReadTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeout">netWriteTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSize">parserMaxMemSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSize">queryAllocBlockSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSize">queryPreallocSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimit">regexpTimeLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSize">sortBufferSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlMode">sqlMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKey">sqlRequirePrimaryKey</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlWarnings">sqlWarnings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListeners">threadPoolDedicatedListeners</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimit">threadPoolMaxTransactionsLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSize">tmpTableSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolation">transactionIsolation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.waitTimeout">waitTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autocommitInput`<sup>Optional</sup> <a name="autocommitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.autocommitInput"></a>

```java
public java.lang.Object getAutocommitInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bigTablesInput`<sup>Optional</sup> <a name="bigTablesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.bigTablesInput"></a>

```java
public java.lang.Object getBigTablesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `binlogExpireLogsSecondsInput`<sup>Optional</sup> <a name="binlogExpireLogsSecondsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSecondsInput"></a>

```java
public java.lang.Number getBinlogExpireLogsSecondsInput();
```

- *Type:* java.lang.Number

---

##### `binlogRowMetadataInput`<sup>Optional</sup> <a name="binlogRowMetadataInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadataInput"></a>

```java
public java.lang.String getBinlogRowMetadataInput();
```

- *Type:* java.lang.String

---

##### `binlogRowValueOptionsInput`<sup>Optional</sup> <a name="binlogRowValueOptionsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptionsInput"></a>

```java
public java.lang.String getBinlogRowValueOptionsInput();
```

- *Type:* java.lang.String

---

##### `binlogTransactionCompressionInput`<sup>Optional</sup> <a name="binlogTransactionCompressionInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompressionInput"></a>

```java
public java.lang.Object getBinlogTransactionCompressionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `completionTypeInput`<sup>Optional</sup> <a name="completionTypeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.completionTypeInput"></a>

```java
public java.lang.String getCompletionTypeInput();
```

- *Type:* java.lang.String

---

##### `connectionMemoryChunkSizeInput`<sup>Optional</sup> <a name="connectionMemoryChunkSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSizeInput"></a>

```java
public java.lang.Number getConnectionMemoryChunkSizeInput();
```

- *Type:* java.lang.Number

---

##### `connectionMemoryLimitInput`<sup>Optional</sup> <a name="connectionMemoryLimitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimitInput"></a>

```java
public java.lang.String getConnectionMemoryLimitInput();
```

- *Type:* java.lang.String

---

##### `connectTimeoutInput`<sup>Optional</sup> <a name="connectTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectTimeoutInput"></a>

```java
public java.lang.Number getConnectTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `cteMaxRecursionDepthInput`<sup>Optional</sup> <a name="cteMaxRecursionDepthInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepthInput"></a>

```java
public java.lang.String getCteMaxRecursionDepthInput();
```

- *Type:* java.lang.String

---

##### `defaultAuthenticationPluginInput`<sup>Optional</sup> <a name="defaultAuthenticationPluginInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPluginInput"></a>

```java
public java.lang.String getDefaultAuthenticationPluginInput();
```

- *Type:* java.lang.String

---

##### `foreignKeyChecksInput`<sup>Optional</sup> <a name="foreignKeyChecksInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecksInput"></a>

```java
public java.lang.Object getForeignKeyChecksInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `generatedRandomPasswordLengthInput`<sup>Optional</sup> <a name="generatedRandomPasswordLengthInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLengthInput"></a>

```java
public java.lang.Number getGeneratedRandomPasswordLengthInput();
```

- *Type:* java.lang.Number

---

##### `globalConnectionMemoryLimitInput`<sup>Optional</sup> <a name="globalConnectionMemoryLimitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimitInput"></a>

```java
public java.lang.String getGlobalConnectionMemoryLimitInput();
```

- *Type:* java.lang.String

---

##### `globalConnectionMemoryTrackingInput`<sup>Optional</sup> <a name="globalConnectionMemoryTrackingInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTrackingInput"></a>

```java
public java.lang.Object getGlobalConnectionMemoryTrackingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupReplicationConsistencyInput`<sup>Optional</sup> <a name="groupReplicationConsistencyInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistencyInput"></a>

```java
public java.lang.String getGroupReplicationConsistencyInput();
```

- *Type:* java.lang.String

---

##### `informationSchemaStatsExpiryInput`<sup>Optional</sup> <a name="informationSchemaStatsExpiryInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiryInput"></a>

```java
public java.lang.Number getInformationSchemaStatsExpiryInput();
```

- *Type:* java.lang.Number

---

##### `innodbBufferPoolDumpPctInput`<sup>Optional</sup> <a name="innodbBufferPoolDumpPctInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPctInput"></a>

```java
public java.lang.Number getInnodbBufferPoolDumpPctInput();
```

- *Type:* java.lang.Number

---

##### `innodbBufferPoolInstancesInput`<sup>Optional</sup> <a name="innodbBufferPoolInstancesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstancesInput"></a>

```java
public java.lang.Number getInnodbBufferPoolInstancesInput();
```

- *Type:* java.lang.Number

---

##### `innodbBufferPoolSizeInput`<sup>Optional</sup> <a name="innodbBufferPoolSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSizeInput"></a>

```java
public java.lang.String getInnodbBufferPoolSizeInput();
```

- *Type:* java.lang.String

---

##### `innodbDdlBufferSizeInput`<sup>Optional</sup> <a name="innodbDdlBufferSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSizeInput"></a>

```java
public java.lang.String getInnodbDdlBufferSizeInput();
```

- *Type:* java.lang.String

---

##### `innodbDdlThreadsInput`<sup>Optional</sup> <a name="innodbDdlThreadsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreadsInput"></a>

```java
public java.lang.Number getInnodbDdlThreadsInput();
```

- *Type:* java.lang.Number

---

##### `innodbFtEnableStopwordInput`<sup>Optional</sup> <a name="innodbFtEnableStopwordInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopwordInput"></a>

```java
public java.lang.Object getInnodbFtEnableStopwordInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `innodbFtMaxTokenSizeInput`<sup>Optional</sup> <a name="innodbFtMaxTokenSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSizeInput"></a>

```java
public java.lang.Number getInnodbFtMaxTokenSizeInput();
```

- *Type:* java.lang.Number

---

##### `innodbFtMinTokenSizeInput`<sup>Optional</sup> <a name="innodbFtMinTokenSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSizeInput"></a>

```java
public java.lang.Number getInnodbFtMinTokenSizeInput();
```

- *Type:* java.lang.Number

---

##### `innodbFtNumWordOptimizeInput`<sup>Optional</sup> <a name="innodbFtNumWordOptimizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimizeInput"></a>

```java
public java.lang.Number getInnodbFtNumWordOptimizeInput();
```

- *Type:* java.lang.Number

---

##### `innodbFtResultCacheLimitInput`<sup>Optional</sup> <a name="innodbFtResultCacheLimitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimitInput"></a>

```java
public java.lang.String getInnodbFtResultCacheLimitInput();
```

- *Type:* java.lang.String

---

##### `innodbFtServerStopwordTableInput`<sup>Optional</sup> <a name="innodbFtServerStopwordTableInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTableInput"></a>

```java
public java.lang.String getInnodbFtServerStopwordTableInput();
```

- *Type:* java.lang.String

---

##### `innodbLockWaitTimeoutInput`<sup>Optional</sup> <a name="innodbLockWaitTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeoutInput"></a>

```java
public java.lang.Number getInnodbLockWaitTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `innodbLogWriterThreadsInput`<sup>Optional</sup> <a name="innodbLogWriterThreadsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreadsInput"></a>

```java
public java.lang.Object getInnodbLogWriterThreadsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `innodbMaxPurgeLagDelayInput`<sup>Optional</sup> <a name="innodbMaxPurgeLagDelayInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelayInput"></a>

```java
public java.lang.Number getInnodbMaxPurgeLagDelayInput();
```

- *Type:* java.lang.Number

---

##### `innodbMaxPurgeLagInput`<sup>Optional</sup> <a name="innodbMaxPurgeLagInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagInput"></a>

```java
public java.lang.String getInnodbMaxPurgeLagInput();
```

- *Type:* java.lang.String

---

##### `innodbStatsPersistentSamplePagesInput`<sup>Optional</sup> <a name="innodbStatsPersistentSamplePagesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePagesInput"></a>

```java
public java.lang.String getInnodbStatsPersistentSamplePagesInput();
```

- *Type:* java.lang.String

---

##### `innodbStatsTransientSamplePagesInput`<sup>Optional</sup> <a name="innodbStatsTransientSamplePagesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePagesInput"></a>

```java
public java.lang.String getInnodbStatsTransientSamplePagesInput();
```

- *Type:* java.lang.String

---

##### `interactiveTimeoutInput`<sup>Optional</sup> <a name="interactiveTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeoutInput"></a>

```java
public java.lang.Number getInteractiveTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `localInfileInput`<sup>Optional</sup> <a name="localInfileInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.localInfileInput"></a>

```java
public java.lang.Object getLocalInfileInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mandatoryRolesInput`<sup>Optional</sup> <a name="mandatoryRolesInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRolesInput"></a>

```java
public java.lang.String getMandatoryRolesInput();
```

- *Type:* java.lang.String

---

##### `maxAllowedPacketInput`<sup>Optional</sup> <a name="maxAllowedPacketInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacketInput"></a>

```java
public java.lang.Number getMaxAllowedPacketInput();
```

- *Type:* java.lang.Number

---

##### `maxBinlogCacheSizeInput`<sup>Optional</sup> <a name="maxBinlogCacheSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSizeInput"></a>

```java
public java.lang.String getMaxBinlogCacheSizeInput();
```

- *Type:* java.lang.String

---

##### `maxConnectErrorsInput`<sup>Optional</sup> <a name="maxConnectErrorsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrorsInput"></a>

```java
public java.lang.String getMaxConnectErrorsInput();
```

- *Type:* java.lang.String

---

##### `maxConnectionsInput`<sup>Optional</sup> <a name="maxConnectionsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectionsInput"></a>

```java
public java.lang.Number getMaxConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `maxExecutionTimeInput`<sup>Optional</sup> <a name="maxExecutionTimeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTimeInput"></a>

```java
public java.lang.String getMaxExecutionTimeInput();
```

- *Type:* java.lang.String

---

##### `maxHeapTableSizeInput`<sup>Optional</sup> <a name="maxHeapTableSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSizeInput"></a>

```java
public java.lang.String getMaxHeapTableSizeInput();
```

- *Type:* java.lang.String

---

##### `maxPreparedStmtCountInput`<sup>Optional</sup> <a name="maxPreparedStmtCountInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCountInput"></a>

```java
public java.lang.Number getMaxPreparedStmtCountInput();
```

- *Type:* java.lang.Number

---

##### `mysqlFirewallModeInput`<sup>Optional</sup> <a name="mysqlFirewallModeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallModeInput"></a>

```java
public java.lang.Object getMysqlFirewallModeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mysqlxConnectTimeoutInput`<sup>Optional</sup> <a name="mysqlxConnectTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeoutInput"></a>

```java
public java.lang.Number getMysqlxConnectTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `mysqlxDeflateDefaultCompressionLevelInput`<sup>Optional</sup> <a name="mysqlxDeflateDefaultCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevelInput"></a>

```java
public java.lang.Number getMysqlxDeflateDefaultCompressionLevelInput();
```

- *Type:* java.lang.Number

---

##### `mysqlxDeflateMaxClientCompressionLevelInput`<sup>Optional</sup> <a name="mysqlxDeflateMaxClientCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevelInput"></a>

```java
public java.lang.Number getMysqlxDeflateMaxClientCompressionLevelInput();
```

- *Type:* java.lang.Number

---

##### `mysqlxDocumentIdUniquePrefixInput`<sup>Optional</sup> <a name="mysqlxDocumentIdUniquePrefixInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefixInput"></a>

```java
public java.lang.Number getMysqlxDocumentIdUniquePrefixInput();
```

- *Type:* java.lang.Number

---

##### `mysqlxEnableHelloNoticeInput`<sup>Optional</sup> <a name="mysqlxEnableHelloNoticeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNoticeInput"></a>

```java
public java.lang.Object getMysqlxEnableHelloNoticeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mysqlxIdleWorkerThreadTimeoutInput`<sup>Optional</sup> <a name="mysqlxIdleWorkerThreadTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeoutInput"></a>

```java
public java.lang.Number getMysqlxIdleWorkerThreadTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `mysqlxInteractiveTimeoutInput`<sup>Optional</sup> <a name="mysqlxInteractiveTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeoutInput"></a>

```java
public java.lang.Number getMysqlxInteractiveTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `mysqlxLz4DefaultCompressionLevelInput`<sup>Optional</sup> <a name="mysqlxLz4DefaultCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevelInput"></a>

```java
public java.lang.Number getMysqlxLz4DefaultCompressionLevelInput();
```

- *Type:* java.lang.Number

---

##### `mysqlxLz4MaxClientCompressionLevelInput`<sup>Optional</sup> <a name="mysqlxLz4MaxClientCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevelInput"></a>

```java
public java.lang.Number getMysqlxLz4MaxClientCompressionLevelInput();
```

- *Type:* java.lang.Number

---

##### `mysqlxMaxAllowedPacketInput`<sup>Optional</sup> <a name="mysqlxMaxAllowedPacketInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacketInput"></a>

```java
public java.lang.Number getMysqlxMaxAllowedPacketInput();
```

- *Type:* java.lang.Number

---

##### `mysqlxMinWorkerThreadsInput`<sup>Optional</sup> <a name="mysqlxMinWorkerThreadsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreadsInput"></a>

```java
public java.lang.Number getMysqlxMinWorkerThreadsInput();
```

- *Type:* java.lang.Number

---

##### `mysqlxReadTimeoutInput`<sup>Optional</sup> <a name="mysqlxReadTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeoutInput"></a>

```java
public java.lang.Number getMysqlxReadTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `mysqlxWaitTimeoutInput`<sup>Optional</sup> <a name="mysqlxWaitTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeoutInput"></a>

```java
public java.lang.Number getMysqlxWaitTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `mysqlxWriteTimeoutInput`<sup>Optional</sup> <a name="mysqlxWriteTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeoutInput"></a>

```java
public java.lang.Number getMysqlxWriteTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `mysqlxZstdDefaultCompressionLevelInput`<sup>Optional</sup> <a name="mysqlxZstdDefaultCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevelInput"></a>

```java
public java.lang.Number getMysqlxZstdDefaultCompressionLevelInput();
```

- *Type:* java.lang.Number

---

##### `mysqlxZstdMaxClientCompressionLevelInput`<sup>Optional</sup> <a name="mysqlxZstdMaxClientCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevelInput"></a>

```java
public java.lang.Number getMysqlxZstdMaxClientCompressionLevelInput();
```

- *Type:* java.lang.Number

---

##### `mysqlZstdDefaultCompressionLevelInput`<sup>Optional</sup> <a name="mysqlZstdDefaultCompressionLevelInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevelInput"></a>

```java
public java.lang.Number getMysqlZstdDefaultCompressionLevelInput();
```

- *Type:* java.lang.Number

---

##### `netReadTimeoutInput`<sup>Optional</sup> <a name="netReadTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeoutInput"></a>

```java
public java.lang.Number getNetReadTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `netWriteTimeoutInput`<sup>Optional</sup> <a name="netWriteTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeoutInput"></a>

```java
public java.lang.Number getNetWriteTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `parserMaxMemSizeInput`<sup>Optional</sup> <a name="parserMaxMemSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSizeInput"></a>

```java
public java.lang.String getParserMaxMemSizeInput();
```

- *Type:* java.lang.String

---

##### `queryAllocBlockSizeInput`<sup>Optional</sup> <a name="queryAllocBlockSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSizeInput"></a>

```java
public java.lang.String getQueryAllocBlockSizeInput();
```

- *Type:* java.lang.String

---

##### `queryPreallocSizeInput`<sup>Optional</sup> <a name="queryPreallocSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSizeInput"></a>

```java
public java.lang.String getQueryPreallocSizeInput();
```

- *Type:* java.lang.String

---

##### `regexpTimeLimitInput`<sup>Optional</sup> <a name="regexpTimeLimitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimitInput"></a>

```java
public java.lang.Number getRegexpTimeLimitInput();
```

- *Type:* java.lang.Number

---

##### `sortBufferSizeInput`<sup>Optional</sup> <a name="sortBufferSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSizeInput"></a>

```java
public java.lang.String getSortBufferSizeInput();
```

- *Type:* java.lang.String

---

##### `sqlModeInput`<sup>Optional</sup> <a name="sqlModeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlModeInput"></a>

```java
public java.lang.String getSqlModeInput();
```

- *Type:* java.lang.String

---

##### `sqlRequirePrimaryKeyInput`<sup>Optional</sup> <a name="sqlRequirePrimaryKeyInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKeyInput"></a>

```java
public java.lang.Object getSqlRequirePrimaryKeyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sqlWarningsInput`<sup>Optional</sup> <a name="sqlWarningsInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlWarningsInput"></a>

```java
public java.lang.Object getSqlWarningsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `threadPoolDedicatedListenersInput`<sup>Optional</sup> <a name="threadPoolDedicatedListenersInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListenersInput"></a>

```java
public java.lang.Object getThreadPoolDedicatedListenersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `threadPoolMaxTransactionsLimitInput`<sup>Optional</sup> <a name="threadPoolMaxTransactionsLimitInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimitInput"></a>

```java
public java.lang.Number getThreadPoolMaxTransactionsLimitInput();
```

- *Type:* java.lang.Number

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `tmpTableSizeInput`<sup>Optional</sup> <a name="tmpTableSizeInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSizeInput"></a>

```java
public java.lang.String getTmpTableSizeInput();
```

- *Type:* java.lang.String

---

##### `transactionIsolationInput`<sup>Optional</sup> <a name="transactionIsolationInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolationInput"></a>

```java
public java.lang.String getTransactionIsolationInput();
```

- *Type:* java.lang.String

---

##### `waitTimeoutInput`<sup>Optional</sup> <a name="waitTimeoutInput" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.waitTimeoutInput"></a>

```java
public java.lang.Number getWaitTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `autocommit`<sup>Required</sup> <a name="autocommit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.autocommit"></a>

```java
public java.lang.Object getAutocommit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bigTables`<sup>Required</sup> <a name="bigTables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.bigTables"></a>

```java
public java.lang.Object getBigTables();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `binlogExpireLogsSeconds`<sup>Required</sup> <a name="binlogExpireLogsSeconds" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSeconds"></a>

```java
public java.lang.Number getBinlogExpireLogsSeconds();
```

- *Type:* java.lang.Number

---

##### `binlogRowMetadata`<sup>Required</sup> <a name="binlogRowMetadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadata"></a>

```java
public java.lang.String getBinlogRowMetadata();
```

- *Type:* java.lang.String

---

##### `binlogRowValueOptions`<sup>Required</sup> <a name="binlogRowValueOptions" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptions"></a>

```java
public java.lang.String getBinlogRowValueOptions();
```

- *Type:* java.lang.String

---

##### `binlogTransactionCompression`<sup>Required</sup> <a name="binlogTransactionCompression" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompression"></a>

```java
public java.lang.Object getBinlogTransactionCompression();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `completionType`<sup>Required</sup> <a name="completionType" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.completionType"></a>

```java
public java.lang.String getCompletionType();
```

- *Type:* java.lang.String

---

##### `connectionMemoryChunkSize`<sup>Required</sup> <a name="connectionMemoryChunkSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSize"></a>

```java
public java.lang.Number getConnectionMemoryChunkSize();
```

- *Type:* java.lang.Number

---

##### `connectionMemoryLimit`<sup>Required</sup> <a name="connectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimit"></a>

```java
public java.lang.String getConnectionMemoryLimit();
```

- *Type:* java.lang.String

---

##### `connectTimeout`<sup>Required</sup> <a name="connectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectTimeout"></a>

```java
public java.lang.Number getConnectTimeout();
```

- *Type:* java.lang.Number

---

##### `cteMaxRecursionDepth`<sup>Required</sup> <a name="cteMaxRecursionDepth" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepth"></a>

```java
public java.lang.String getCteMaxRecursionDepth();
```

- *Type:* java.lang.String

---

##### `defaultAuthenticationPlugin`<sup>Required</sup> <a name="defaultAuthenticationPlugin" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPlugin"></a>

```java
public java.lang.String getDefaultAuthenticationPlugin();
```

- *Type:* java.lang.String

---

##### `foreignKeyChecks`<sup>Required</sup> <a name="foreignKeyChecks" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecks"></a>

```java
public java.lang.Object getForeignKeyChecks();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `generatedRandomPasswordLength`<sup>Required</sup> <a name="generatedRandomPasswordLength" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLength"></a>

```java
public java.lang.Number getGeneratedRandomPasswordLength();
```

- *Type:* java.lang.Number

---

##### `globalConnectionMemoryLimit`<sup>Required</sup> <a name="globalConnectionMemoryLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimit"></a>

```java
public java.lang.String getGlobalConnectionMemoryLimit();
```

- *Type:* java.lang.String

---

##### `globalConnectionMemoryTracking`<sup>Required</sup> <a name="globalConnectionMemoryTracking" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTracking"></a>

```java
public java.lang.Object getGlobalConnectionMemoryTracking();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupReplicationConsistency`<sup>Required</sup> <a name="groupReplicationConsistency" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistency"></a>

```java
public java.lang.String getGroupReplicationConsistency();
```

- *Type:* java.lang.String

---

##### `informationSchemaStatsExpiry`<sup>Required</sup> <a name="informationSchemaStatsExpiry" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiry"></a>

```java
public java.lang.Number getInformationSchemaStatsExpiry();
```

- *Type:* java.lang.Number

---

##### `innodbBufferPoolDumpPct`<sup>Required</sup> <a name="innodbBufferPoolDumpPct" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPct"></a>

```java
public java.lang.Number getInnodbBufferPoolDumpPct();
```

- *Type:* java.lang.Number

---

##### `innodbBufferPoolInstances`<sup>Required</sup> <a name="innodbBufferPoolInstances" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstances"></a>

```java
public java.lang.Number getInnodbBufferPoolInstances();
```

- *Type:* java.lang.Number

---

##### `innodbBufferPoolSize`<sup>Required</sup> <a name="innodbBufferPoolSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSize"></a>

```java
public java.lang.String getInnodbBufferPoolSize();
```

- *Type:* java.lang.String

---

##### `innodbDdlBufferSize`<sup>Required</sup> <a name="innodbDdlBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSize"></a>

```java
public java.lang.String getInnodbDdlBufferSize();
```

- *Type:* java.lang.String

---

##### `innodbDdlThreads`<sup>Required</sup> <a name="innodbDdlThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreads"></a>

```java
public java.lang.Number getInnodbDdlThreads();
```

- *Type:* java.lang.Number

---

##### `innodbFtEnableStopword`<sup>Required</sup> <a name="innodbFtEnableStopword" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopword"></a>

```java
public java.lang.Object getInnodbFtEnableStopword();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `innodbFtMaxTokenSize`<sup>Required</sup> <a name="innodbFtMaxTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSize"></a>

```java
public java.lang.Number getInnodbFtMaxTokenSize();
```

- *Type:* java.lang.Number

---

##### `innodbFtMinTokenSize`<sup>Required</sup> <a name="innodbFtMinTokenSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSize"></a>

```java
public java.lang.Number getInnodbFtMinTokenSize();
```

- *Type:* java.lang.Number

---

##### `innodbFtNumWordOptimize`<sup>Required</sup> <a name="innodbFtNumWordOptimize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimize"></a>

```java
public java.lang.Number getInnodbFtNumWordOptimize();
```

- *Type:* java.lang.Number

---

##### `innodbFtResultCacheLimit`<sup>Required</sup> <a name="innodbFtResultCacheLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimit"></a>

```java
public java.lang.String getInnodbFtResultCacheLimit();
```

- *Type:* java.lang.String

---

##### `innodbFtServerStopwordTable`<sup>Required</sup> <a name="innodbFtServerStopwordTable" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTable"></a>

```java
public java.lang.String getInnodbFtServerStopwordTable();
```

- *Type:* java.lang.String

---

##### `innodbLockWaitTimeout`<sup>Required</sup> <a name="innodbLockWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeout"></a>

```java
public java.lang.Number getInnodbLockWaitTimeout();
```

- *Type:* java.lang.Number

---

##### `innodbLogWriterThreads`<sup>Required</sup> <a name="innodbLogWriterThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreads"></a>

```java
public java.lang.Object getInnodbLogWriterThreads();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `innodbMaxPurgeLag`<sup>Required</sup> <a name="innodbMaxPurgeLag" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLag"></a>

```java
public java.lang.String getInnodbMaxPurgeLag();
```

- *Type:* java.lang.String

---

##### `innodbMaxPurgeLagDelay`<sup>Required</sup> <a name="innodbMaxPurgeLagDelay" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelay"></a>

```java
public java.lang.Number getInnodbMaxPurgeLagDelay();
```

- *Type:* java.lang.Number

---

##### `innodbStatsPersistentSamplePages`<sup>Required</sup> <a name="innodbStatsPersistentSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePages"></a>

```java
public java.lang.String getInnodbStatsPersistentSamplePages();
```

- *Type:* java.lang.String

---

##### `innodbStatsTransientSamplePages`<sup>Required</sup> <a name="innodbStatsTransientSamplePages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePages"></a>

```java
public java.lang.String getInnodbStatsTransientSamplePages();
```

- *Type:* java.lang.String

---

##### `interactiveTimeout`<sup>Required</sup> <a name="interactiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeout"></a>

```java
public java.lang.Number getInteractiveTimeout();
```

- *Type:* java.lang.Number

---

##### `localInfile`<sup>Required</sup> <a name="localInfile" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.localInfile"></a>

```java
public java.lang.Object getLocalInfile();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mandatoryRoles`<sup>Required</sup> <a name="mandatoryRoles" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRoles"></a>

```java
public java.lang.String getMandatoryRoles();
```

- *Type:* java.lang.String

---

##### `maxAllowedPacket`<sup>Required</sup> <a name="maxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacket"></a>

```java
public java.lang.Number getMaxAllowedPacket();
```

- *Type:* java.lang.Number

---

##### `maxBinlogCacheSize`<sup>Required</sup> <a name="maxBinlogCacheSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSize"></a>

```java
public java.lang.String getMaxBinlogCacheSize();
```

- *Type:* java.lang.String

---

##### `maxConnectErrors`<sup>Required</sup> <a name="maxConnectErrors" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrors"></a>

```java
public java.lang.String getMaxConnectErrors();
```

- *Type:* java.lang.String

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnections"></a>

```java
public java.lang.Number getMaxConnections();
```

- *Type:* java.lang.Number

---

##### `maxExecutionTime`<sup>Required</sup> <a name="maxExecutionTime" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTime"></a>

```java
public java.lang.String getMaxExecutionTime();
```

- *Type:* java.lang.String

---

##### `maxHeapTableSize`<sup>Required</sup> <a name="maxHeapTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSize"></a>

```java
public java.lang.String getMaxHeapTableSize();
```

- *Type:* java.lang.String

---

##### `maxPreparedStmtCount`<sup>Required</sup> <a name="maxPreparedStmtCount" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCount"></a>

```java
public java.lang.Number getMaxPreparedStmtCount();
```

- *Type:* java.lang.Number

---

##### `mysqlFirewallMode`<sup>Required</sup> <a name="mysqlFirewallMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallMode"></a>

```java
public java.lang.Object getMysqlFirewallMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mysqlxConnectTimeout`<sup>Required</sup> <a name="mysqlxConnectTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeout"></a>

```java
public java.lang.Number getMysqlxConnectTimeout();
```

- *Type:* java.lang.Number

---

##### `mysqlxDeflateDefaultCompressionLevel`<sup>Required</sup> <a name="mysqlxDeflateDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel"></a>

```java
public java.lang.Number getMysqlxDeflateDefaultCompressionLevel();
```

- *Type:* java.lang.Number

---

##### `mysqlxDeflateMaxClientCompressionLevel`<sup>Required</sup> <a name="mysqlxDeflateMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel"></a>

```java
public java.lang.Number getMysqlxDeflateMaxClientCompressionLevel();
```

- *Type:* java.lang.Number

---

##### `mysqlxDocumentIdUniquePrefix`<sup>Required</sup> <a name="mysqlxDocumentIdUniquePrefix" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix"></a>

```java
public java.lang.Number getMysqlxDocumentIdUniquePrefix();
```

- *Type:* java.lang.Number

---

##### `mysqlxEnableHelloNotice`<sup>Required</sup> <a name="mysqlxEnableHelloNotice" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNotice"></a>

```java
public java.lang.Object getMysqlxEnableHelloNotice();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mysqlxIdleWorkerThreadTimeout`<sup>Required</sup> <a name="mysqlxIdleWorkerThreadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout"></a>

```java
public java.lang.Number getMysqlxIdleWorkerThreadTimeout();
```

- *Type:* java.lang.Number

---

##### `mysqlxInteractiveTimeout`<sup>Required</sup> <a name="mysqlxInteractiveTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeout"></a>

```java
public java.lang.Number getMysqlxInteractiveTimeout();
```

- *Type:* java.lang.Number

---

##### `mysqlxLz4DefaultCompressionLevel`<sup>Required</sup> <a name="mysqlxLz4DefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel"></a>

```java
public java.lang.Number getMysqlxLz4DefaultCompressionLevel();
```

- *Type:* java.lang.Number

---

##### `mysqlxLz4MaxClientCompressionLevel`<sup>Required</sup> <a name="mysqlxLz4MaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel"></a>

```java
public java.lang.Number getMysqlxLz4MaxClientCompressionLevel();
```

- *Type:* java.lang.Number

---

##### `mysqlxMaxAllowedPacket`<sup>Required</sup> <a name="mysqlxMaxAllowedPacket" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacket"></a>

```java
public java.lang.Number getMysqlxMaxAllowedPacket();
```

- *Type:* java.lang.Number

---

##### `mysqlxMinWorkerThreads`<sup>Required</sup> <a name="mysqlxMinWorkerThreads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreads"></a>

```java
public java.lang.Number getMysqlxMinWorkerThreads();
```

- *Type:* java.lang.Number

---

##### `mysqlxReadTimeout`<sup>Required</sup> <a name="mysqlxReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeout"></a>

```java
public java.lang.Number getMysqlxReadTimeout();
```

- *Type:* java.lang.Number

---

##### `mysqlxWaitTimeout`<sup>Required</sup> <a name="mysqlxWaitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeout"></a>

```java
public java.lang.Number getMysqlxWaitTimeout();
```

- *Type:* java.lang.Number

---

##### `mysqlxWriteTimeout`<sup>Required</sup> <a name="mysqlxWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeout"></a>

```java
public java.lang.Number getMysqlxWriteTimeout();
```

- *Type:* java.lang.Number

---

##### `mysqlxZstdDefaultCompressionLevel`<sup>Required</sup> <a name="mysqlxZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel"></a>

```java
public java.lang.Number getMysqlxZstdDefaultCompressionLevel();
```

- *Type:* java.lang.Number

---

##### `mysqlxZstdMaxClientCompressionLevel`<sup>Required</sup> <a name="mysqlxZstdMaxClientCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel"></a>

```java
public java.lang.Number getMysqlxZstdMaxClientCompressionLevel();
```

- *Type:* java.lang.Number

---

##### `mysqlZstdDefaultCompressionLevel`<sup>Required</sup> <a name="mysqlZstdDefaultCompressionLevel" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel"></a>

```java
public java.lang.Number getMysqlZstdDefaultCompressionLevel();
```

- *Type:* java.lang.Number

---

##### `netReadTimeout`<sup>Required</sup> <a name="netReadTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeout"></a>

```java
public java.lang.Number getNetReadTimeout();
```

- *Type:* java.lang.Number

---

##### `netWriteTimeout`<sup>Required</sup> <a name="netWriteTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeout"></a>

```java
public java.lang.Number getNetWriteTimeout();
```

- *Type:* java.lang.Number

---

##### `parserMaxMemSize`<sup>Required</sup> <a name="parserMaxMemSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSize"></a>

```java
public java.lang.String getParserMaxMemSize();
```

- *Type:* java.lang.String

---

##### `queryAllocBlockSize`<sup>Required</sup> <a name="queryAllocBlockSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSize"></a>

```java
public java.lang.String getQueryAllocBlockSize();
```

- *Type:* java.lang.String

---

##### `queryPreallocSize`<sup>Required</sup> <a name="queryPreallocSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSize"></a>

```java
public java.lang.String getQueryPreallocSize();
```

- *Type:* java.lang.String

---

##### `regexpTimeLimit`<sup>Required</sup> <a name="regexpTimeLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimit"></a>

```java
public java.lang.Number getRegexpTimeLimit();
```

- *Type:* java.lang.Number

---

##### `sortBufferSize`<sup>Required</sup> <a name="sortBufferSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSize"></a>

```java
public java.lang.String getSortBufferSize();
```

- *Type:* java.lang.String

---

##### `sqlMode`<sup>Required</sup> <a name="sqlMode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlMode"></a>

```java
public java.lang.String getSqlMode();
```

- *Type:* java.lang.String

---

##### `sqlRequirePrimaryKey`<sup>Required</sup> <a name="sqlRequirePrimaryKey" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKey"></a>

```java
public java.lang.Object getSqlRequirePrimaryKey();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sqlWarnings`<sup>Required</sup> <a name="sqlWarnings" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlWarnings"></a>

```java
public java.lang.Object getSqlWarnings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `threadPoolDedicatedListeners`<sup>Required</sup> <a name="threadPoolDedicatedListeners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListeners"></a>

```java
public java.lang.Object getThreadPoolDedicatedListeners();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `threadPoolMaxTransactionsLimit`<sup>Required</sup> <a name="threadPoolMaxTransactionsLimit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimit"></a>

```java
public java.lang.Number getThreadPoolMaxTransactionsLimit();
```

- *Type:* java.lang.Number

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `tmpTableSize`<sup>Required</sup> <a name="tmpTableSize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSize"></a>

```java
public java.lang.String getTmpTableSize();
```

- *Type:* java.lang.String

---

##### `transactionIsolation`<sup>Required</sup> <a name="transactionIsolation" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolation"></a>

```java
public java.lang.String getTransactionIsolation();
```

- *Type:* java.lang.String

---

##### `waitTimeout`<sup>Required</sup> <a name="waitTimeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.waitTimeout"></a>

```java
public java.lang.Number getWaitTimeout();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.internalValue"></a>

```java
public MysqlMysqlConfigurationVariables getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a>

---



