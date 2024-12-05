# `dataOciDataSafeDatabaseSecurityConfigs` Submodule <a name="`dataOciDataSafeDatabaseSecurityConfigs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeDatabaseSecurityConfigs <a name="DataOciDataSafeDatabaseSecurityConfigs" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs oci_data_safe_database_security_configs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_database_security_configs.DataOciDataSafeDatabaseSecurityConfigs;

DataOciDataSafeDatabaseSecurityConfigs.Builder.create(Construct scope, java.lang.String id)
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
//  .accessLevel(java.lang.String)
//  .compartmentIdInSubtree(java.lang.Boolean)
//  .compartmentIdInSubtree(IResolvable)
//  .databaseSecurityConfigId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeDatabaseSecurityConfigsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .targetId(java.lang.String)
//  .timeCreatedGreaterThanOrEqualTo(java.lang.String)
//  .timeCreatedLessThan(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#compartment_id DataOciDataSafeDatabaseSecurityConfigs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#access_level DataOciDataSafeDatabaseSecurityConfigs#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#compartment_id_in_subtree DataOciDataSafeDatabaseSecurityConfigs#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.databaseSecurityConfigId">databaseSecurityConfigId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#database_security_config_id DataOciDataSafeDatabaseSecurityConfigs#database_security_config_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#display_name DataOciDataSafeDatabaseSecurityConfigs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter">DataOciDataSafeDatabaseSecurityConfigsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#id DataOciDataSafeDatabaseSecurityConfigs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#state DataOciDataSafeDatabaseSecurityConfigs#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.targetId">targetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#target_id DataOciDataSafeDatabaseSecurityConfigs#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#time_created_greater_than_or_equal_to DataOciDataSafeDatabaseSecurityConfigs#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#time_created_less_than DataOciDataSafeDatabaseSecurityConfigs#time_created_less_than}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#compartment_id DataOciDataSafeDatabaseSecurityConfigs#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.accessLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#access_level DataOciDataSafeDatabaseSecurityConfigs#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#compartment_id_in_subtree DataOciDataSafeDatabaseSecurityConfigs#compartment_id_in_subtree}.

---

##### `databaseSecurityConfigId`<sup>Optional</sup> <a name="databaseSecurityConfigId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.databaseSecurityConfigId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#database_security_config_id DataOciDataSafeDatabaseSecurityConfigs#database_security_config_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#display_name DataOciDataSafeDatabaseSecurityConfigs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter">DataOciDataSafeDatabaseSecurityConfigsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#filter DataOciDataSafeDatabaseSecurityConfigs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#id DataOciDataSafeDatabaseSecurityConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#state DataOciDataSafeDatabaseSecurityConfigs#state}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.targetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#target_id DataOciDataSafeDatabaseSecurityConfigs#target_id}.

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.timeCreatedGreaterThanOrEqualTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#time_created_greater_than_or_equal_to DataOciDataSafeDatabaseSecurityConfigs#time_created_greater_than_or_equal_to}.

---

##### `timeCreatedLessThan`<sup>Optional</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.timeCreatedLessThan"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#time_created_less_than DataOciDataSafeDatabaseSecurityConfigs#time_created_less_than}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetDatabaseSecurityConfigId">resetDatabaseSecurityConfigId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetTargetId">resetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetTimeCreatedGreaterThanOrEqualTo">resetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetTimeCreatedLessThan">resetTimeCreatedLessThan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDataSafeDatabaseSecurityConfigsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter">DataOciDataSafeDatabaseSecurityConfigsFilter</a>>

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetCompartmentIdInSubtree"></a>

```java
public void resetCompartmentIdInSubtree()
```

##### `resetDatabaseSecurityConfigId` <a name="resetDatabaseSecurityConfigId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetDatabaseSecurityConfigId"></a>

```java
public void resetDatabaseSecurityConfigId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetState"></a>

```java
public void resetState()
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetTargetId"></a>

```java
public void resetTargetId()
```

##### `resetTimeCreatedGreaterThanOrEqualTo` <a name="resetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetTimeCreatedGreaterThanOrEqualTo"></a>

```java
public void resetTimeCreatedGreaterThanOrEqualTo()
```

##### `resetTimeCreatedLessThan` <a name="resetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetTimeCreatedLessThan"></a>

```java
public void resetTimeCreatedLessThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeDatabaseSecurityConfigs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_database_security_configs.DataOciDataSafeDatabaseSecurityConfigs;

DataOciDataSafeDatabaseSecurityConfigs.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_database_security_configs.DataOciDataSafeDatabaseSecurityConfigs;

DataOciDataSafeDatabaseSecurityConfigs.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_database_security_configs.DataOciDataSafeDatabaseSecurityConfigs;

DataOciDataSafeDatabaseSecurityConfigs.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_database_security_configs.DataOciDataSafeDatabaseSecurityConfigs;

DataOciDataSafeDatabaseSecurityConfigs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDataSafeDatabaseSecurityConfigs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDataSafeDatabaseSecurityConfigs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDataSafeDatabaseSecurityConfigs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDataSafeDatabaseSecurityConfigs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeDatabaseSecurityConfigs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.databaseSecurityConfigCollection">databaseSecurityConfigCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList">DataOciDataSafeDatabaseSecurityConfigsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.databaseSecurityConfigIdInput">databaseSecurityConfigIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter">DataOciDataSafeDatabaseSecurityConfigsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.targetIdInput">targetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedGreaterThanOrEqualToInput">timeCreatedGreaterThanOrEqualToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedLessThanInput">timeCreatedLessThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.databaseSecurityConfigId">databaseSecurityConfigId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `databaseSecurityConfigCollection`<sup>Required</sup> <a name="databaseSecurityConfigCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.databaseSecurityConfigCollection"></a>

```java
public DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList getDatabaseSecurityConfigCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.filter"></a>

```java
public DataOciDataSafeDatabaseSecurityConfigsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList">DataOciDataSafeDatabaseSecurityConfigsFilterList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentIdInSubtreeInput"></a>

```java
public java.lang.Object getCompartmentIdInSubtreeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `databaseSecurityConfigIdInput`<sup>Optional</sup> <a name="databaseSecurityConfigIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.databaseSecurityConfigIdInput"></a>

```java
public java.lang.String getDatabaseSecurityConfigIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter">DataOciDataSafeDatabaseSecurityConfigsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.targetIdInput"></a>

```java
public java.lang.String getTargetIdInput();
```

- *Type:* java.lang.String

---

##### `timeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedGreaterThanOrEqualToInput"></a>

```java
public java.lang.String getTimeCreatedGreaterThanOrEqualToInput();
```

- *Type:* java.lang.String

---

##### `timeCreatedLessThanInput`<sup>Optional</sup> <a name="timeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedLessThanInput"></a>

```java
public java.lang.String getTimeCreatedLessThanInput();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `databaseSecurityConfigId`<sup>Required</sup> <a name="databaseSecurityConfigId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.databaseSecurityConfigId"></a>

```java
public java.lang.String getDatabaseSecurityConfigId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeCreatedGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

---

##### `timeCreatedLessThan`<sup>Required</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedLessThan"></a>

```java
public java.lang.String getTimeCreatedLessThan();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeDatabaseSecurityConfigsConfig <a name="DataOciDataSafeDatabaseSecurityConfigsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_database_security_configs.DataOciDataSafeDatabaseSecurityConfigsConfig;

DataOciDataSafeDatabaseSecurityConfigsConfig.builder()
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
//  .accessLevel(java.lang.String)
//  .compartmentIdInSubtree(java.lang.Boolean)
//  .compartmentIdInSubtree(IResolvable)
//  .databaseSecurityConfigId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeDatabaseSecurityConfigsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .targetId(java.lang.String)
//  .timeCreatedGreaterThanOrEqualTo(java.lang.String)
//  .timeCreatedLessThan(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#compartment_id DataOciDataSafeDatabaseSecurityConfigs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#access_level DataOciDataSafeDatabaseSecurityConfigs#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#compartment_id_in_subtree DataOciDataSafeDatabaseSecurityConfigs#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.databaseSecurityConfigId">databaseSecurityConfigId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#database_security_config_id DataOciDataSafeDatabaseSecurityConfigs#database_security_config_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#display_name DataOciDataSafeDatabaseSecurityConfigs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter">DataOciDataSafeDatabaseSecurityConfigsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#id DataOciDataSafeDatabaseSecurityConfigs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#state DataOciDataSafeDatabaseSecurityConfigs#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.targetId">targetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#target_id DataOciDataSafeDatabaseSecurityConfigs#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#time_created_greater_than_or_equal_to DataOciDataSafeDatabaseSecurityConfigs#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#time_created_less_than DataOciDataSafeDatabaseSecurityConfigs#time_created_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#compartment_id DataOciDataSafeDatabaseSecurityConfigs#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#access_level DataOciDataSafeDatabaseSecurityConfigs#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#compartment_id_in_subtree DataOciDataSafeDatabaseSecurityConfigs#compartment_id_in_subtree}.

---

##### `databaseSecurityConfigId`<sup>Optional</sup> <a name="databaseSecurityConfigId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.databaseSecurityConfigId"></a>

```java
public java.lang.String getDatabaseSecurityConfigId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#database_security_config_id DataOciDataSafeDatabaseSecurityConfigs#database_security_config_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#display_name DataOciDataSafeDatabaseSecurityConfigs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter">DataOciDataSafeDatabaseSecurityConfigsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#filter DataOciDataSafeDatabaseSecurityConfigs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#id DataOciDataSafeDatabaseSecurityConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#state DataOciDataSafeDatabaseSecurityConfigs#state}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#target_id DataOciDataSafeDatabaseSecurityConfigs#target_id}.

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeCreatedGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#time_created_greater_than_or_equal_to DataOciDataSafeDatabaseSecurityConfigs#time_created_greater_than_or_equal_to}.

---

##### `timeCreatedLessThan`<sup>Optional</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.timeCreatedLessThan"></a>

```java
public java.lang.String getTimeCreatedLessThan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#time_created_less_than DataOciDataSafeDatabaseSecurityConfigs#time_created_less_than}.

---

### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_database_security_configs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection;

DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection.builder()
    .build();
```


### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_database_security_configs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems;

DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems.builder()
    .build();
```


### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_database_security_configs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig;

DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig.builder()
    .build();
```


### DataOciDataSafeDatabaseSecurityConfigsFilter <a name="DataOciDataSafeDatabaseSecurityConfigsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_database_security_configs.DataOciDataSafeDatabaseSecurityConfigsFilter;

DataOciDataSafeDatabaseSecurityConfigsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#name DataOciDataSafeDatabaseSecurityConfigs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#values DataOciDataSafeDatabaseSecurityConfigs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#regex DataOciDataSafeDatabaseSecurityConfigs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#name DataOciDataSafeDatabaseSecurityConfigs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#values DataOciDataSafeDatabaseSecurityConfigs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#regex DataOciDataSafeDatabaseSecurityConfigs#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_database_security_configs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList;

new DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.get"></a>

```java
public DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_database_security_configs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference;

new DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.databaseSecurityConfigId">databaseSecurityConfigId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.refreshTrigger">refreshTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.sqlFirewallConfig">sqlFirewallConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.timeLastRefreshed">timeLastRefreshed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `databaseSecurityConfigId`<sup>Required</sup> <a name="databaseSecurityConfigId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.databaseSecurityConfigId"></a>

```java
public java.lang.String getDatabaseSecurityConfigId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `refreshTrigger`<sup>Required</sup> <a name="refreshTrigger" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.refreshTrigger"></a>

```java
public java.lang.Number getRefreshTrigger();
```

- *Type:* java.lang.Number

---

##### `sqlFirewallConfig`<sup>Required</sup> <a name="sqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.sqlFirewallConfig"></a>

```java
public DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList getSqlFirewallConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeLastRefreshed`<sup>Required</sup> <a name="timeLastRefreshed" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.timeLastRefreshed"></a>

```java
public java.lang.String getTimeLastRefreshed();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems</a>

---


### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_database_security_configs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList;

new DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.get"></a>

```java
public DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_database_security_configs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference;

new DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.excludeJob">excludeJob</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.timeStatusUpdated">timeStatusUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.violationLogAutoPurge">violationLogAutoPurge</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludeJob`<sup>Required</sup> <a name="excludeJob" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.excludeJob"></a>

```java
public java.lang.String getExcludeJob();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeStatusUpdated`<sup>Required</sup> <a name="timeStatusUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.timeStatusUpdated"></a>

```java
public java.lang.String getTimeStatusUpdated();
```

- *Type:* java.lang.String

---

##### `violationLogAutoPurge`<sup>Required</sup> <a name="violationLogAutoPurge" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.violationLogAutoPurge"></a>

```java
public java.lang.String getViolationLogAutoPurge();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig</a>

---


### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_database_security_configs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList;

new DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.get"></a>

```java
public DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_database_security_configs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference;

new DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.items"></a>

```java
public DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection</a>

---


### DataOciDataSafeDatabaseSecurityConfigsFilterList <a name="DataOciDataSafeDatabaseSecurityConfigsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_database_security_configs.DataOciDataSafeDatabaseSecurityConfigsFilterList;

new DataOciDataSafeDatabaseSecurityConfigsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.get"></a>

```java
public DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter">DataOciDataSafeDatabaseSecurityConfigsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter">DataOciDataSafeDatabaseSecurityConfigsFilter</a>>

---


### DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference <a name="DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_database_security_configs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference;

new DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter">DataOciDataSafeDatabaseSecurityConfigsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter">DataOciDataSafeDatabaseSecurityConfigsFilter</a>

---



