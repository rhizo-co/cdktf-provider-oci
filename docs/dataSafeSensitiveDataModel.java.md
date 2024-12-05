# `dataSafeSensitiveDataModel` Submodule <a name="`dataSafeSensitiveDataModel` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSensitiveDataModel <a name="DataSafeSensitiveDataModel" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model oci_data_safe_sensitive_data_model}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sensitive_data_model.DataSafeSensitiveDataModel;

DataSafeSensitiveDataModel.Builder.create(Construct scope, java.lang.String id)
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
    .targetId(java.lang.String)
//  .appSuiteName(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isAppDefinedRelationDiscoveryEnabled(java.lang.Boolean)
//  .isAppDefinedRelationDiscoveryEnabled(IResolvable)
//  .isIncludeAllSchemas(java.lang.Boolean)
//  .isIncludeAllSchemas(IResolvable)
//  .isIncludeAllSensitiveTypes(java.lang.Boolean)
//  .isIncludeAllSensitiveTypes(IResolvable)
//  .isSampleDataCollectionEnabled(java.lang.Boolean)
//  .isSampleDataCollectionEnabled(IResolvable)
//  .schemasForDiscovery(java.util.List<java.lang.String>)
//  .sensitiveTypeIdsForDiscovery(java.util.List<java.lang.String>)
//  .tablesForDiscovery(IResolvable)
//  .tablesForDiscovery(java.util.List<DataSafeSensitiveDataModelTablesForDiscovery>)
//  .timeouts(DataSafeSensitiveDataModelTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#compartment_id DataSafeSensitiveDataModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.targetId">targetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#target_id DataSafeSensitiveDataModel#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.appSuiteName">appSuiteName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#app_suite_name DataSafeSensitiveDataModel#app_suite_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#defined_tags DataSafeSensitiveDataModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#description DataSafeSensitiveDataModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#display_name DataSafeSensitiveDataModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#freeform_tags DataSafeSensitiveDataModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#id DataSafeSensitiveDataModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.isAppDefinedRelationDiscoveryEnabled">isAppDefinedRelationDiscoveryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#is_app_defined_relation_discovery_enabled DataSafeSensitiveDataModel#is_app_defined_relation_discovery_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.isIncludeAllSchemas">isIncludeAllSchemas</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#is_include_all_schemas DataSafeSensitiveDataModel#is_include_all_schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.isIncludeAllSensitiveTypes">isIncludeAllSensitiveTypes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#is_include_all_sensitive_types DataSafeSensitiveDataModel#is_include_all_sensitive_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.isSampleDataCollectionEnabled">isSampleDataCollectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#is_sample_data_collection_enabled DataSafeSensitiveDataModel#is_sample_data_collection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.schemasForDiscovery">schemasForDiscovery</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#schemas_for_discovery DataSafeSensitiveDataModel#schemas_for_discovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.sensitiveTypeIdsForDiscovery">sensitiveTypeIdsForDiscovery</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#sensitive_type_ids_for_discovery DataSafeSensitiveDataModel#sensitive_type_ids_for_discovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.tablesForDiscovery">tablesForDiscovery</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscovery">DataSafeSensitiveDataModelTablesForDiscovery</a>></code> | tables_for_discovery block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeouts">DataSafeSensitiveDataModelTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#compartment_id DataSafeSensitiveDataModel#compartment_id}.

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.targetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#target_id DataSafeSensitiveDataModel#target_id}.

---

##### `appSuiteName`<sup>Optional</sup> <a name="appSuiteName" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.appSuiteName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#app_suite_name DataSafeSensitiveDataModel#app_suite_name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#defined_tags DataSafeSensitiveDataModel#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#description DataSafeSensitiveDataModel#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#display_name DataSafeSensitiveDataModel#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#freeform_tags DataSafeSensitiveDataModel#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#id DataSafeSensitiveDataModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAppDefinedRelationDiscoveryEnabled`<sup>Optional</sup> <a name="isAppDefinedRelationDiscoveryEnabled" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.isAppDefinedRelationDiscoveryEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#is_app_defined_relation_discovery_enabled DataSafeSensitiveDataModel#is_app_defined_relation_discovery_enabled}.

---

##### `isIncludeAllSchemas`<sup>Optional</sup> <a name="isIncludeAllSchemas" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.isIncludeAllSchemas"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#is_include_all_schemas DataSafeSensitiveDataModel#is_include_all_schemas}.

---

##### `isIncludeAllSensitiveTypes`<sup>Optional</sup> <a name="isIncludeAllSensitiveTypes" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.isIncludeAllSensitiveTypes"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#is_include_all_sensitive_types DataSafeSensitiveDataModel#is_include_all_sensitive_types}.

---

##### `isSampleDataCollectionEnabled`<sup>Optional</sup> <a name="isSampleDataCollectionEnabled" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.isSampleDataCollectionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#is_sample_data_collection_enabled DataSafeSensitiveDataModel#is_sample_data_collection_enabled}.

---

##### `schemasForDiscovery`<sup>Optional</sup> <a name="schemasForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.schemasForDiscovery"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#schemas_for_discovery DataSafeSensitiveDataModel#schemas_for_discovery}.

---

##### `sensitiveTypeIdsForDiscovery`<sup>Optional</sup> <a name="sensitiveTypeIdsForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.sensitiveTypeIdsForDiscovery"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#sensitive_type_ids_for_discovery DataSafeSensitiveDataModel#sensitive_type_ids_for_discovery}.

---

##### `tablesForDiscovery`<sup>Optional</sup> <a name="tablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.tablesForDiscovery"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscovery">DataSafeSensitiveDataModelTablesForDiscovery</a>>

tables_for_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#tables_for_discovery DataSafeSensitiveDataModel#tables_for_discovery}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeouts">DataSafeSensitiveDataModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#timeouts DataSafeSensitiveDataModel#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.putTablesForDiscovery">putTablesForDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetAppSuiteName">resetAppSuiteName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetIsAppDefinedRelationDiscoveryEnabled">resetIsAppDefinedRelationDiscoveryEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetIsIncludeAllSchemas">resetIsIncludeAllSchemas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetIsIncludeAllSensitiveTypes">resetIsIncludeAllSensitiveTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetIsSampleDataCollectionEnabled">resetIsSampleDataCollectionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetSchemasForDiscovery">resetSchemasForDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetSensitiveTypeIdsForDiscovery">resetSensitiveTypeIdsForDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetTablesForDiscovery">resetTablesForDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTablesForDiscovery` <a name="putTablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.putTablesForDiscovery"></a>

```java
public void putTablesForDiscovery(IResolvable OR java.util.List<DataSafeSensitiveDataModelTablesForDiscovery> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.putTablesForDiscovery.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscovery">DataSafeSensitiveDataModelTablesForDiscovery</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.putTimeouts"></a>

```java
public void putTimeouts(DataSafeSensitiveDataModelTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeouts">DataSafeSensitiveDataModelTimeouts</a>

---

##### `resetAppSuiteName` <a name="resetAppSuiteName" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetAppSuiteName"></a>

```java
public void resetAppSuiteName()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetId"></a>

```java
public void resetId()
```

##### `resetIsAppDefinedRelationDiscoveryEnabled` <a name="resetIsAppDefinedRelationDiscoveryEnabled" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetIsAppDefinedRelationDiscoveryEnabled"></a>

```java
public void resetIsAppDefinedRelationDiscoveryEnabled()
```

##### `resetIsIncludeAllSchemas` <a name="resetIsIncludeAllSchemas" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetIsIncludeAllSchemas"></a>

```java
public void resetIsIncludeAllSchemas()
```

##### `resetIsIncludeAllSensitiveTypes` <a name="resetIsIncludeAllSensitiveTypes" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetIsIncludeAllSensitiveTypes"></a>

```java
public void resetIsIncludeAllSensitiveTypes()
```

##### `resetIsSampleDataCollectionEnabled` <a name="resetIsSampleDataCollectionEnabled" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetIsSampleDataCollectionEnabled"></a>

```java
public void resetIsSampleDataCollectionEnabled()
```

##### `resetSchemasForDiscovery` <a name="resetSchemasForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetSchemasForDiscovery"></a>

```java
public void resetSchemasForDiscovery()
```

##### `resetSensitiveTypeIdsForDiscovery` <a name="resetSensitiveTypeIdsForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetSensitiveTypeIdsForDiscovery"></a>

```java
public void resetSensitiveTypeIdsForDiscovery()
```

##### `resetTablesForDiscovery` <a name="resetTablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetTablesForDiscovery"></a>

```java
public void resetTablesForDiscovery()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeSensitiveDataModel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sensitive_data_model.DataSafeSensitiveDataModel;

DataSafeSensitiveDataModel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sensitive_data_model.DataSafeSensitiveDataModel;

DataSafeSensitiveDataModel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sensitive_data_model.DataSafeSensitiveDataModel;

DataSafeSensitiveDataModel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sensitive_data_model.DataSafeSensitiveDataModel;

DataSafeSensitiveDataModel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSafeSensitiveDataModel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataSafeSensitiveDataModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSafeSensitiveDataModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSafeSensitiveDataModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSensitiveDataModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.tablesForDiscovery">tablesForDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList">DataSafeSensitiveDataModelTablesForDiscoveryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference">DataSafeSensitiveDataModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.appSuiteNameInput">appSuiteNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.isAppDefinedRelationDiscoveryEnabledInput">isAppDefinedRelationDiscoveryEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.isIncludeAllSchemasInput">isIncludeAllSchemasInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.isIncludeAllSensitiveTypesInput">isIncludeAllSensitiveTypesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.isSampleDataCollectionEnabledInput">isSampleDataCollectionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.schemasForDiscoveryInput">schemasForDiscoveryInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.sensitiveTypeIdsForDiscoveryInput">sensitiveTypeIdsForDiscoveryInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.tablesForDiscoveryInput">tablesForDiscoveryInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscovery">DataSafeSensitiveDataModelTablesForDiscovery</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.targetIdInput">targetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeouts">DataSafeSensitiveDataModelTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.appSuiteName">appSuiteName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.isAppDefinedRelationDiscoveryEnabled">isAppDefinedRelationDiscoveryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.isIncludeAllSchemas">isIncludeAllSchemas</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.isIncludeAllSensitiveTypes">isIncludeAllSensitiveTypes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.isSampleDataCollectionEnabled">isSampleDataCollectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.schemasForDiscovery">schemasForDiscovery</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.sensitiveTypeIdsForDiscovery">sensitiveTypeIdsForDiscovery</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `tablesForDiscovery`<sup>Required</sup> <a name="tablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.tablesForDiscovery"></a>

```java
public DataSafeSensitiveDataModelTablesForDiscoveryList getTablesForDiscovery();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList">DataSafeSensitiveDataModelTablesForDiscoveryList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.timeouts"></a>

```java
public DataSafeSensitiveDataModelTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference">DataSafeSensitiveDataModelTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `appSuiteNameInput`<sup>Optional</sup> <a name="appSuiteNameInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.appSuiteNameInput"></a>

```java
public java.lang.String getAppSuiteNameInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isAppDefinedRelationDiscoveryEnabledInput`<sup>Optional</sup> <a name="isAppDefinedRelationDiscoveryEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.isAppDefinedRelationDiscoveryEnabledInput"></a>

```java
public java.lang.Object getIsAppDefinedRelationDiscoveryEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isIncludeAllSchemasInput`<sup>Optional</sup> <a name="isIncludeAllSchemasInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.isIncludeAllSchemasInput"></a>

```java
public java.lang.Object getIsIncludeAllSchemasInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isIncludeAllSensitiveTypesInput`<sup>Optional</sup> <a name="isIncludeAllSensitiveTypesInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.isIncludeAllSensitiveTypesInput"></a>

```java
public java.lang.Object getIsIncludeAllSensitiveTypesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSampleDataCollectionEnabledInput`<sup>Optional</sup> <a name="isSampleDataCollectionEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.isSampleDataCollectionEnabledInput"></a>

```java
public java.lang.Object getIsSampleDataCollectionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schemasForDiscoveryInput`<sup>Optional</sup> <a name="schemasForDiscoveryInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.schemasForDiscoveryInput"></a>

```java
public java.util.List<java.lang.String> getSchemasForDiscoveryInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sensitiveTypeIdsForDiscoveryInput`<sup>Optional</sup> <a name="sensitiveTypeIdsForDiscoveryInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.sensitiveTypeIdsForDiscoveryInput"></a>

```java
public java.util.List<java.lang.String> getSensitiveTypeIdsForDiscoveryInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tablesForDiscoveryInput`<sup>Optional</sup> <a name="tablesForDiscoveryInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.tablesForDiscoveryInput"></a>

```java
public java.lang.Object getTablesForDiscoveryInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscovery">DataSafeSensitiveDataModelTablesForDiscovery</a>>

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.targetIdInput"></a>

```java
public java.lang.String getTargetIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeouts">DataSafeSensitiveDataModelTimeouts</a>

---

##### `appSuiteName`<sup>Required</sup> <a name="appSuiteName" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.appSuiteName"></a>

```java
public java.lang.String getAppSuiteName();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isAppDefinedRelationDiscoveryEnabled`<sup>Required</sup> <a name="isAppDefinedRelationDiscoveryEnabled" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.isAppDefinedRelationDiscoveryEnabled"></a>

```java
public java.lang.Object getIsAppDefinedRelationDiscoveryEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isIncludeAllSchemas`<sup>Required</sup> <a name="isIncludeAllSchemas" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.isIncludeAllSchemas"></a>

```java
public java.lang.Object getIsIncludeAllSchemas();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isIncludeAllSensitiveTypes`<sup>Required</sup> <a name="isIncludeAllSensitiveTypes" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.isIncludeAllSensitiveTypes"></a>

```java
public java.lang.Object getIsIncludeAllSensitiveTypes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSampleDataCollectionEnabled`<sup>Required</sup> <a name="isSampleDataCollectionEnabled" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.isSampleDataCollectionEnabled"></a>

```java
public java.lang.Object getIsSampleDataCollectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schemasForDiscovery`<sup>Required</sup> <a name="schemasForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.schemasForDiscovery"></a>

```java
public java.util.List<java.lang.String> getSchemasForDiscovery();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sensitiveTypeIdsForDiscovery`<sup>Required</sup> <a name="sensitiveTypeIdsForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.sensitiveTypeIdsForDiscovery"></a>

```java
public java.util.List<java.lang.String> getSensitiveTypeIdsForDiscovery();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSensitiveDataModelConfig <a name="DataSafeSensitiveDataModelConfig" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sensitive_data_model.DataSafeSensitiveDataModelConfig;

DataSafeSensitiveDataModelConfig.builder()
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
    .targetId(java.lang.String)
//  .appSuiteName(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isAppDefinedRelationDiscoveryEnabled(java.lang.Boolean)
//  .isAppDefinedRelationDiscoveryEnabled(IResolvable)
//  .isIncludeAllSchemas(java.lang.Boolean)
//  .isIncludeAllSchemas(IResolvable)
//  .isIncludeAllSensitiveTypes(java.lang.Boolean)
//  .isIncludeAllSensitiveTypes(IResolvable)
//  .isSampleDataCollectionEnabled(java.lang.Boolean)
//  .isSampleDataCollectionEnabled(IResolvable)
//  .schemasForDiscovery(java.util.List<java.lang.String>)
//  .sensitiveTypeIdsForDiscovery(java.util.List<java.lang.String>)
//  .tablesForDiscovery(IResolvable)
//  .tablesForDiscovery(java.util.List<DataSafeSensitiveDataModelTablesForDiscovery>)
//  .timeouts(DataSafeSensitiveDataModelTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#compartment_id DataSafeSensitiveDataModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.targetId">targetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#target_id DataSafeSensitiveDataModel#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.appSuiteName">appSuiteName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#app_suite_name DataSafeSensitiveDataModel#app_suite_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#defined_tags DataSafeSensitiveDataModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#description DataSafeSensitiveDataModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#display_name DataSafeSensitiveDataModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#freeform_tags DataSafeSensitiveDataModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#id DataSafeSensitiveDataModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.isAppDefinedRelationDiscoveryEnabled">isAppDefinedRelationDiscoveryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#is_app_defined_relation_discovery_enabled DataSafeSensitiveDataModel#is_app_defined_relation_discovery_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.isIncludeAllSchemas">isIncludeAllSchemas</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#is_include_all_schemas DataSafeSensitiveDataModel#is_include_all_schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.isIncludeAllSensitiveTypes">isIncludeAllSensitiveTypes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#is_include_all_sensitive_types DataSafeSensitiveDataModel#is_include_all_sensitive_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.isSampleDataCollectionEnabled">isSampleDataCollectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#is_sample_data_collection_enabled DataSafeSensitiveDataModel#is_sample_data_collection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.schemasForDiscovery">schemasForDiscovery</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#schemas_for_discovery DataSafeSensitiveDataModel#schemas_for_discovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.sensitiveTypeIdsForDiscovery">sensitiveTypeIdsForDiscovery</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#sensitive_type_ids_for_discovery DataSafeSensitiveDataModel#sensitive_type_ids_for_discovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.tablesForDiscovery">tablesForDiscovery</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscovery">DataSafeSensitiveDataModelTablesForDiscovery</a>></code> | tables_for_discovery block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeouts">DataSafeSensitiveDataModelTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#compartment_id DataSafeSensitiveDataModel#compartment_id}.

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#target_id DataSafeSensitiveDataModel#target_id}.

---

##### `appSuiteName`<sup>Optional</sup> <a name="appSuiteName" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.appSuiteName"></a>

```java
public java.lang.String getAppSuiteName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#app_suite_name DataSafeSensitiveDataModel#app_suite_name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#defined_tags DataSafeSensitiveDataModel#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#description DataSafeSensitiveDataModel#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#display_name DataSafeSensitiveDataModel#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#freeform_tags DataSafeSensitiveDataModel#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#id DataSafeSensitiveDataModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAppDefinedRelationDiscoveryEnabled`<sup>Optional</sup> <a name="isAppDefinedRelationDiscoveryEnabled" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.isAppDefinedRelationDiscoveryEnabled"></a>

```java
public java.lang.Object getIsAppDefinedRelationDiscoveryEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#is_app_defined_relation_discovery_enabled DataSafeSensitiveDataModel#is_app_defined_relation_discovery_enabled}.

---

##### `isIncludeAllSchemas`<sup>Optional</sup> <a name="isIncludeAllSchemas" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.isIncludeAllSchemas"></a>

```java
public java.lang.Object getIsIncludeAllSchemas();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#is_include_all_schemas DataSafeSensitiveDataModel#is_include_all_schemas}.

---

##### `isIncludeAllSensitiveTypes`<sup>Optional</sup> <a name="isIncludeAllSensitiveTypes" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.isIncludeAllSensitiveTypes"></a>

```java
public java.lang.Object getIsIncludeAllSensitiveTypes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#is_include_all_sensitive_types DataSafeSensitiveDataModel#is_include_all_sensitive_types}.

---

##### `isSampleDataCollectionEnabled`<sup>Optional</sup> <a name="isSampleDataCollectionEnabled" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.isSampleDataCollectionEnabled"></a>

```java
public java.lang.Object getIsSampleDataCollectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#is_sample_data_collection_enabled DataSafeSensitiveDataModel#is_sample_data_collection_enabled}.

---

##### `schemasForDiscovery`<sup>Optional</sup> <a name="schemasForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.schemasForDiscovery"></a>

```java
public java.util.List<java.lang.String> getSchemasForDiscovery();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#schemas_for_discovery DataSafeSensitiveDataModel#schemas_for_discovery}.

---

##### `sensitiveTypeIdsForDiscovery`<sup>Optional</sup> <a name="sensitiveTypeIdsForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.sensitiveTypeIdsForDiscovery"></a>

```java
public java.util.List<java.lang.String> getSensitiveTypeIdsForDiscovery();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#sensitive_type_ids_for_discovery DataSafeSensitiveDataModel#sensitive_type_ids_for_discovery}.

---

##### `tablesForDiscovery`<sup>Optional</sup> <a name="tablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.tablesForDiscovery"></a>

```java
public java.lang.Object getTablesForDiscovery();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscovery">DataSafeSensitiveDataModelTablesForDiscovery</a>>

tables_for_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#tables_for_discovery DataSafeSensitiveDataModel#tables_for_discovery}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelConfig.property.timeouts"></a>

```java
public DataSafeSensitiveDataModelTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeouts">DataSafeSensitiveDataModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#timeouts DataSafeSensitiveDataModel#timeouts}

---

### DataSafeSensitiveDataModelTablesForDiscovery <a name="DataSafeSensitiveDataModelTablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscovery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sensitive_data_model.DataSafeSensitiveDataModelTablesForDiscovery;

DataSafeSensitiveDataModelTablesForDiscovery.builder()
    .schemaName(java.lang.String)
//  .tableNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscovery.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#schema_name DataSafeSensitiveDataModel#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscovery.property.tableNames">tableNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#table_names DataSafeSensitiveDataModel#table_names}. |

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscovery.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#schema_name DataSafeSensitiveDataModel#schema_name}.

---

##### `tableNames`<sup>Optional</sup> <a name="tableNames" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscovery.property.tableNames"></a>

```java
public java.util.List<java.lang.String> getTableNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#table_names DataSafeSensitiveDataModel#table_names}.

---

### DataSafeSensitiveDataModelTimeouts <a name="DataSafeSensitiveDataModelTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sensitive_data_model.DataSafeSensitiveDataModelTimeouts;

DataSafeSensitiveDataModelTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#create DataSafeSensitiveDataModel#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#delete DataSafeSensitiveDataModel#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#update DataSafeSensitiveDataModel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#create DataSafeSensitiveDataModel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#delete DataSafeSensitiveDataModel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_model#update DataSafeSensitiveDataModel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSensitiveDataModelTablesForDiscoveryList <a name="DataSafeSensitiveDataModelTablesForDiscoveryList" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sensitive_data_model.DataSafeSensitiveDataModelTablesForDiscoveryList;

new DataSafeSensitiveDataModelTablesForDiscoveryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.get"></a>

```java
public DataSafeSensitiveDataModelTablesForDiscoveryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscovery">DataSafeSensitiveDataModelTablesForDiscovery</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscovery">DataSafeSensitiveDataModelTablesForDiscovery</a>>

---


### DataSafeSensitiveDataModelTablesForDiscoveryOutputReference <a name="DataSafeSensitiveDataModelTablesForDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sensitive_data_model.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference;

new DataSafeSensitiveDataModelTablesForDiscoveryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.resetTableNames">resetTableNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTableNames` <a name="resetTableNames" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.resetTableNames"></a>

```java
public void resetTableNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.tableNamesInput">tableNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.tableNames">tableNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscovery">DataSafeSensitiveDataModelTablesForDiscovery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `tableNamesInput`<sup>Optional</sup> <a name="tableNamesInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.tableNamesInput"></a>

```java
public java.util.List<java.lang.String> getTableNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `tableNames`<sup>Required</sup> <a name="tableNames" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.tableNames"></a>

```java
public java.util.List<java.lang.String> getTableNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscoveryOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTablesForDiscovery">DataSafeSensitiveDataModelTablesForDiscovery</a>

---


### DataSafeSensitiveDataModelTimeoutsOutputReference <a name="DataSafeSensitiveDataModelTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_sensitive_data_model.DataSafeSensitiveDataModelTimeoutsOutputReference;

new DataSafeSensitiveDataModelTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeouts">DataSafeSensitiveDataModelTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModel.DataSafeSensitiveDataModelTimeouts">DataSafeSensitiveDataModelTimeouts</a>

---



