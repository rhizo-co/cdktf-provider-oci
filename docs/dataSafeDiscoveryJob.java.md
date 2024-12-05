# `dataSafeDiscoveryJob` Submodule <a name="`dataSafeDiscoveryJob` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeDiscoveryJob <a name="DataSafeDiscoveryJob" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job oci_data_safe_discovery_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_discovery_job.DataSafeDiscoveryJob;

DataSafeDiscoveryJob.Builder.create(Construct scope, java.lang.String id)
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
    .sensitiveDataModelId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .discoveryType(java.lang.String)
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
//  .tablesForDiscovery(java.util.List<DataSafeDiscoveryJobTablesForDiscovery>)
//  .timeouts(DataSafeDiscoveryJobTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#compartment_id DataSafeDiscoveryJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_data_model_id DataSafeDiscoveryJob#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#defined_tags DataSafeDiscoveryJob#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.discoveryType">discoveryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#discovery_type DataSafeDiscoveryJob#discovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#display_name DataSafeDiscoveryJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#freeform_tags DataSafeDiscoveryJob#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#id DataSafeDiscoveryJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.isAppDefinedRelationDiscoveryEnabled">isAppDefinedRelationDiscoveryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_app_defined_relation_discovery_enabled DataSafeDiscoveryJob#is_app_defined_relation_discovery_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.isIncludeAllSchemas">isIncludeAllSchemas</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_schemas DataSafeDiscoveryJob#is_include_all_schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.isIncludeAllSensitiveTypes">isIncludeAllSensitiveTypes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_sensitive_types DataSafeDiscoveryJob#is_include_all_sensitive_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.isSampleDataCollectionEnabled">isSampleDataCollectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_sample_data_collection_enabled DataSafeDiscoveryJob#is_sample_data_collection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.schemasForDiscovery">schemasForDiscovery</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#schemas_for_discovery DataSafeDiscoveryJob#schemas_for_discovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.sensitiveTypeIdsForDiscovery">sensitiveTypeIdsForDiscovery</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_type_ids_for_discovery DataSafeDiscoveryJob#sensitive_type_ids_for_discovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.tablesForDiscovery">tablesForDiscovery</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>></code> | tables_for_discovery block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#compartment_id DataSafeDiscoveryJob#compartment_id}.

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.sensitiveDataModelId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_data_model_id DataSafeDiscoveryJob#sensitive_data_model_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#defined_tags DataSafeDiscoveryJob#defined_tags}.

---

##### `discoveryType`<sup>Optional</sup> <a name="discoveryType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.discoveryType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#discovery_type DataSafeDiscoveryJob#discovery_type}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#display_name DataSafeDiscoveryJob#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#freeform_tags DataSafeDiscoveryJob#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#id DataSafeDiscoveryJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAppDefinedRelationDiscoveryEnabled`<sup>Optional</sup> <a name="isAppDefinedRelationDiscoveryEnabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.isAppDefinedRelationDiscoveryEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_app_defined_relation_discovery_enabled DataSafeDiscoveryJob#is_app_defined_relation_discovery_enabled}.

---

##### `isIncludeAllSchemas`<sup>Optional</sup> <a name="isIncludeAllSchemas" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.isIncludeAllSchemas"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_schemas DataSafeDiscoveryJob#is_include_all_schemas}.

---

##### `isIncludeAllSensitiveTypes`<sup>Optional</sup> <a name="isIncludeAllSensitiveTypes" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.isIncludeAllSensitiveTypes"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_sensitive_types DataSafeDiscoveryJob#is_include_all_sensitive_types}.

---

##### `isSampleDataCollectionEnabled`<sup>Optional</sup> <a name="isSampleDataCollectionEnabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.isSampleDataCollectionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_sample_data_collection_enabled DataSafeDiscoveryJob#is_sample_data_collection_enabled}.

---

##### `schemasForDiscovery`<sup>Optional</sup> <a name="schemasForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.schemasForDiscovery"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#schemas_for_discovery DataSafeDiscoveryJob#schemas_for_discovery}.

---

##### `sensitiveTypeIdsForDiscovery`<sup>Optional</sup> <a name="sensitiveTypeIdsForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.sensitiveTypeIdsForDiscovery"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_type_ids_for_discovery DataSafeDiscoveryJob#sensitive_type_ids_for_discovery}.

---

##### `tablesForDiscovery`<sup>Optional</sup> <a name="tablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.tablesForDiscovery"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>>

tables_for_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#tables_for_discovery DataSafeDiscoveryJob#tables_for_discovery}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#timeouts DataSafeDiscoveryJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTablesForDiscovery">putTablesForDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDiscoveryType">resetDiscoveryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsAppDefinedRelationDiscoveryEnabled">resetIsAppDefinedRelationDiscoveryEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsIncludeAllSchemas">resetIsIncludeAllSchemas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsIncludeAllSensitiveTypes">resetIsIncludeAllSensitiveTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsSampleDataCollectionEnabled">resetIsSampleDataCollectionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetSchemasForDiscovery">resetSchemasForDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetSensitiveTypeIdsForDiscovery">resetSensitiveTypeIdsForDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetTablesForDiscovery">resetTablesForDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTablesForDiscovery` <a name="putTablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTablesForDiscovery"></a>

```java
public void putTablesForDiscovery(IResolvable OR java.util.List<DataSafeDiscoveryJobTablesForDiscovery> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTablesForDiscovery.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTimeouts"></a>

```java
public void putTimeouts(DataSafeDiscoveryJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDiscoveryType` <a name="resetDiscoveryType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDiscoveryType"></a>

```java
public void resetDiscoveryType()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetId"></a>

```java
public void resetId()
```

##### `resetIsAppDefinedRelationDiscoveryEnabled` <a name="resetIsAppDefinedRelationDiscoveryEnabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsAppDefinedRelationDiscoveryEnabled"></a>

```java
public void resetIsAppDefinedRelationDiscoveryEnabled()
```

##### `resetIsIncludeAllSchemas` <a name="resetIsIncludeAllSchemas" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsIncludeAllSchemas"></a>

```java
public void resetIsIncludeAllSchemas()
```

##### `resetIsIncludeAllSensitiveTypes` <a name="resetIsIncludeAllSensitiveTypes" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsIncludeAllSensitiveTypes"></a>

```java
public void resetIsIncludeAllSensitiveTypes()
```

##### `resetIsSampleDataCollectionEnabled` <a name="resetIsSampleDataCollectionEnabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetIsSampleDataCollectionEnabled"></a>

```java
public void resetIsSampleDataCollectionEnabled()
```

##### `resetSchemasForDiscovery` <a name="resetSchemasForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetSchemasForDiscovery"></a>

```java
public void resetSchemasForDiscovery()
```

##### `resetSensitiveTypeIdsForDiscovery` <a name="resetSensitiveTypeIdsForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetSensitiveTypeIdsForDiscovery"></a>

```java
public void resetSensitiveTypeIdsForDiscovery()
```

##### `resetTablesForDiscovery` <a name="resetTablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetTablesForDiscovery"></a>

```java
public void resetTablesForDiscovery()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeDiscoveryJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_discovery_job.DataSafeDiscoveryJob;

DataSafeDiscoveryJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_discovery_job.DataSafeDiscoveryJob;

DataSafeDiscoveryJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_discovery_job.DataSafeDiscoveryJob;

DataSafeDiscoveryJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_discovery_job.DataSafeDiscoveryJob;

DataSafeDiscoveryJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSafeDiscoveryJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataSafeDiscoveryJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSafeDiscoveryJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSafeDiscoveryJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeDiscoveryJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tablesForDiscovery">tablesForDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList">DataSafeDiscoveryJobTablesForDiscoveryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeFinished">timeFinished</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference">DataSafeDiscoveryJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalColumnsScanned">totalColumnsScanned</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalDeletedSensitiveColumns">totalDeletedSensitiveColumns</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalModifiedSensitiveColumns">totalModifiedSensitiveColumns</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalNewSensitiveColumns">totalNewSensitiveColumns</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalObjectsScanned">totalObjectsScanned</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalSchemasScanned">totalSchemasScanned</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.discoveryTypeInput">discoveryTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isAppDefinedRelationDiscoveryEnabledInput">isAppDefinedRelationDiscoveryEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSchemasInput">isIncludeAllSchemasInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSensitiveTypesInput">isIncludeAllSensitiveTypesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isSampleDataCollectionEnabledInput">isSampleDataCollectionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.schemasForDiscoveryInput">schemasForDiscoveryInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveDataModelIdInput">sensitiveDataModelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveTypeIdsForDiscoveryInput">sensitiveTypeIdsForDiscoveryInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tablesForDiscoveryInput">tablesForDiscoveryInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.discoveryType">discoveryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isAppDefinedRelationDiscoveryEnabled">isAppDefinedRelationDiscoveryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSchemas">isIncludeAllSchemas</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSensitiveTypes">isIncludeAllSensitiveTypes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isSampleDataCollectionEnabled">isSampleDataCollectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.schemasForDiscovery">schemasForDiscovery</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveTypeIdsForDiscovery">sensitiveTypeIdsForDiscovery</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `tablesForDiscovery`<sup>Required</sup> <a name="tablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tablesForDiscovery"></a>

```java
public DataSafeDiscoveryJobTablesForDiscoveryList getTablesForDiscovery();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList">DataSafeDiscoveryJobTablesForDiscoveryList</a>

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeFinished"></a>

```java
public java.lang.String getTimeFinished();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeouts"></a>

```java
public DataSafeDiscoveryJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference">DataSafeDiscoveryJobTimeoutsOutputReference</a>

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

##### `totalColumnsScanned`<sup>Required</sup> <a name="totalColumnsScanned" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalColumnsScanned"></a>

```java
public java.lang.String getTotalColumnsScanned();
```

- *Type:* java.lang.String

---

##### `totalDeletedSensitiveColumns`<sup>Required</sup> <a name="totalDeletedSensitiveColumns" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalDeletedSensitiveColumns"></a>

```java
public java.lang.String getTotalDeletedSensitiveColumns();
```

- *Type:* java.lang.String

---

##### `totalModifiedSensitiveColumns`<sup>Required</sup> <a name="totalModifiedSensitiveColumns" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalModifiedSensitiveColumns"></a>

```java
public java.lang.String getTotalModifiedSensitiveColumns();
```

- *Type:* java.lang.String

---

##### `totalNewSensitiveColumns`<sup>Required</sup> <a name="totalNewSensitiveColumns" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalNewSensitiveColumns"></a>

```java
public java.lang.String getTotalNewSensitiveColumns();
```

- *Type:* java.lang.String

---

##### `totalObjectsScanned`<sup>Required</sup> <a name="totalObjectsScanned" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalObjectsScanned"></a>

```java
public java.lang.String getTotalObjectsScanned();
```

- *Type:* java.lang.String

---

##### `totalSchemasScanned`<sup>Required</sup> <a name="totalSchemasScanned" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.totalSchemasScanned"></a>

```java
public java.lang.String getTotalSchemasScanned();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `discoveryTypeInput`<sup>Optional</sup> <a name="discoveryTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.discoveryTypeInput"></a>

```java
public java.lang.String getDiscoveryTypeInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isAppDefinedRelationDiscoveryEnabledInput`<sup>Optional</sup> <a name="isAppDefinedRelationDiscoveryEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isAppDefinedRelationDiscoveryEnabledInput"></a>

```java
public java.lang.Object getIsAppDefinedRelationDiscoveryEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isIncludeAllSchemasInput`<sup>Optional</sup> <a name="isIncludeAllSchemasInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSchemasInput"></a>

```java
public java.lang.Object getIsIncludeAllSchemasInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isIncludeAllSensitiveTypesInput`<sup>Optional</sup> <a name="isIncludeAllSensitiveTypesInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSensitiveTypesInput"></a>

```java
public java.lang.Object getIsIncludeAllSensitiveTypesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSampleDataCollectionEnabledInput`<sup>Optional</sup> <a name="isSampleDataCollectionEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isSampleDataCollectionEnabledInput"></a>

```java
public java.lang.Object getIsSampleDataCollectionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schemasForDiscoveryInput`<sup>Optional</sup> <a name="schemasForDiscoveryInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.schemasForDiscoveryInput"></a>

```java
public java.util.List<java.lang.String> getSchemasForDiscoveryInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sensitiveDataModelIdInput`<sup>Optional</sup> <a name="sensitiveDataModelIdInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveDataModelIdInput"></a>

```java
public java.lang.String getSensitiveDataModelIdInput();
```

- *Type:* java.lang.String

---

##### `sensitiveTypeIdsForDiscoveryInput`<sup>Optional</sup> <a name="sensitiveTypeIdsForDiscoveryInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveTypeIdsForDiscoveryInput"></a>

```java
public java.util.List<java.lang.String> getSensitiveTypeIdsForDiscoveryInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tablesForDiscoveryInput`<sup>Optional</sup> <a name="tablesForDiscoveryInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tablesForDiscoveryInput"></a>

```java
public java.lang.Object getTablesForDiscoveryInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `discoveryType`<sup>Required</sup> <a name="discoveryType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.discoveryType"></a>

```java
public java.lang.String getDiscoveryType();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isAppDefinedRelationDiscoveryEnabled`<sup>Required</sup> <a name="isAppDefinedRelationDiscoveryEnabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isAppDefinedRelationDiscoveryEnabled"></a>

```java
public java.lang.Object getIsAppDefinedRelationDiscoveryEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isIncludeAllSchemas`<sup>Required</sup> <a name="isIncludeAllSchemas" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSchemas"></a>

```java
public java.lang.Object getIsIncludeAllSchemas();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isIncludeAllSensitiveTypes`<sup>Required</sup> <a name="isIncludeAllSensitiveTypes" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isIncludeAllSensitiveTypes"></a>

```java
public java.lang.Object getIsIncludeAllSensitiveTypes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSampleDataCollectionEnabled`<sup>Required</sup> <a name="isSampleDataCollectionEnabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.isSampleDataCollectionEnabled"></a>

```java
public java.lang.Object getIsSampleDataCollectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schemasForDiscovery`<sup>Required</sup> <a name="schemasForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.schemasForDiscovery"></a>

```java
public java.util.List<java.lang.String> getSchemasForDiscovery();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveDataModelId"></a>

```java
public java.lang.String getSensitiveDataModelId();
```

- *Type:* java.lang.String

---

##### `sensitiveTypeIdsForDiscovery`<sup>Required</sup> <a name="sensitiveTypeIdsForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.sensitiveTypeIdsForDiscovery"></a>

```java
public java.util.List<java.lang.String> getSensitiveTypeIdsForDiscovery();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeDiscoveryJobConfig <a name="DataSafeDiscoveryJobConfig" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_discovery_job.DataSafeDiscoveryJobConfig;

DataSafeDiscoveryJobConfig.builder()
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
    .sensitiveDataModelId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .discoveryType(java.lang.String)
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
//  .tablesForDiscovery(java.util.List<DataSafeDiscoveryJobTablesForDiscovery>)
//  .timeouts(DataSafeDiscoveryJobTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#compartment_id DataSafeDiscoveryJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_data_model_id DataSafeDiscoveryJob#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#defined_tags DataSafeDiscoveryJob#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.discoveryType">discoveryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#discovery_type DataSafeDiscoveryJob#discovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#display_name DataSafeDiscoveryJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#freeform_tags DataSafeDiscoveryJob#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#id DataSafeDiscoveryJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isAppDefinedRelationDiscoveryEnabled">isAppDefinedRelationDiscoveryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_app_defined_relation_discovery_enabled DataSafeDiscoveryJob#is_app_defined_relation_discovery_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isIncludeAllSchemas">isIncludeAllSchemas</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_schemas DataSafeDiscoveryJob#is_include_all_schemas}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isIncludeAllSensitiveTypes">isIncludeAllSensitiveTypes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_sensitive_types DataSafeDiscoveryJob#is_include_all_sensitive_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isSampleDataCollectionEnabled">isSampleDataCollectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_sample_data_collection_enabled DataSafeDiscoveryJob#is_sample_data_collection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.schemasForDiscovery">schemasForDiscovery</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#schemas_for_discovery DataSafeDiscoveryJob#schemas_for_discovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.sensitiveTypeIdsForDiscovery">sensitiveTypeIdsForDiscovery</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_type_ids_for_discovery DataSafeDiscoveryJob#sensitive_type_ids_for_discovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.tablesForDiscovery">tablesForDiscovery</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>></code> | tables_for_discovery block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#compartment_id DataSafeDiscoveryJob#compartment_id}.

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.sensitiveDataModelId"></a>

```java
public java.lang.String getSensitiveDataModelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_data_model_id DataSafeDiscoveryJob#sensitive_data_model_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#defined_tags DataSafeDiscoveryJob#defined_tags}.

---

##### `discoveryType`<sup>Optional</sup> <a name="discoveryType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.discoveryType"></a>

```java
public java.lang.String getDiscoveryType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#discovery_type DataSafeDiscoveryJob#discovery_type}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#display_name DataSafeDiscoveryJob#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#freeform_tags DataSafeDiscoveryJob#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#id DataSafeDiscoveryJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAppDefinedRelationDiscoveryEnabled`<sup>Optional</sup> <a name="isAppDefinedRelationDiscoveryEnabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isAppDefinedRelationDiscoveryEnabled"></a>

```java
public java.lang.Object getIsAppDefinedRelationDiscoveryEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_app_defined_relation_discovery_enabled DataSafeDiscoveryJob#is_app_defined_relation_discovery_enabled}.

---

##### `isIncludeAllSchemas`<sup>Optional</sup> <a name="isIncludeAllSchemas" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isIncludeAllSchemas"></a>

```java
public java.lang.Object getIsIncludeAllSchemas();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_schemas DataSafeDiscoveryJob#is_include_all_schemas}.

---

##### `isIncludeAllSensitiveTypes`<sup>Optional</sup> <a name="isIncludeAllSensitiveTypes" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isIncludeAllSensitiveTypes"></a>

```java
public java.lang.Object getIsIncludeAllSensitiveTypes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_include_all_sensitive_types DataSafeDiscoveryJob#is_include_all_sensitive_types}.

---

##### `isSampleDataCollectionEnabled`<sup>Optional</sup> <a name="isSampleDataCollectionEnabled" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.isSampleDataCollectionEnabled"></a>

```java
public java.lang.Object getIsSampleDataCollectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#is_sample_data_collection_enabled DataSafeDiscoveryJob#is_sample_data_collection_enabled}.

---

##### `schemasForDiscovery`<sup>Optional</sup> <a name="schemasForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.schemasForDiscovery"></a>

```java
public java.util.List<java.lang.String> getSchemasForDiscovery();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#schemas_for_discovery DataSafeDiscoveryJob#schemas_for_discovery}.

---

##### `sensitiveTypeIdsForDiscovery`<sup>Optional</sup> <a name="sensitiveTypeIdsForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.sensitiveTypeIdsForDiscovery"></a>

```java
public java.util.List<java.lang.String> getSensitiveTypeIdsForDiscovery();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#sensitive_type_ids_for_discovery DataSafeDiscoveryJob#sensitive_type_ids_for_discovery}.

---

##### `tablesForDiscovery`<sup>Optional</sup> <a name="tablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.tablesForDiscovery"></a>

```java
public java.lang.Object getTablesForDiscovery();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>>

tables_for_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#tables_for_discovery DataSafeDiscoveryJob#tables_for_discovery}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobConfig.property.timeouts"></a>

```java
public DataSafeDiscoveryJobTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#timeouts DataSafeDiscoveryJob#timeouts}

---

### DataSafeDiscoveryJobTablesForDiscovery <a name="DataSafeDiscoveryJobTablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_discovery_job.DataSafeDiscoveryJobTablesForDiscovery;

DataSafeDiscoveryJobTablesForDiscovery.builder()
    .schemaName(java.lang.String)
//  .tableNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#schema_name DataSafeDiscoveryJob#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery.property.tableNames">tableNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#table_names DataSafeDiscoveryJob#table_names}. |

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#schema_name DataSafeDiscoveryJob#schema_name}.

---

##### `tableNames`<sup>Optional</sup> <a name="tableNames" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery.property.tableNames"></a>

```java
public java.util.List<java.lang.String> getTableNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#table_names DataSafeDiscoveryJob#table_names}.

---

### DataSafeDiscoveryJobTimeouts <a name="DataSafeDiscoveryJobTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_discovery_job.DataSafeDiscoveryJobTimeouts;

DataSafeDiscoveryJobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#create DataSafeDiscoveryJob#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#delete DataSafeDiscoveryJob#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#update DataSafeDiscoveryJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#create DataSafeDiscoveryJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#delete DataSafeDiscoveryJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_job#update DataSafeDiscoveryJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeDiscoveryJobTablesForDiscoveryList <a name="DataSafeDiscoveryJobTablesForDiscoveryList" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_discovery_job.DataSafeDiscoveryJobTablesForDiscoveryList;

new DataSafeDiscoveryJobTablesForDiscoveryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.get"></a>

```java
public DataSafeDiscoveryJobTablesForDiscoveryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>>

---


### DataSafeDiscoveryJobTablesForDiscoveryOutputReference <a name="DataSafeDiscoveryJobTablesForDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_discovery_job.DataSafeDiscoveryJobTablesForDiscoveryOutputReference;

new DataSafeDiscoveryJobTablesForDiscoveryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.resetTableNames">resetTableNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTableNames` <a name="resetTableNames" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.resetTableNames"></a>

```java
public void resetTableNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.tableNamesInput">tableNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.tableNames">tableNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `tableNamesInput`<sup>Optional</sup> <a name="tableNamesInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.tableNamesInput"></a>

```java
public java.util.List<java.lang.String> getTableNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `tableNames`<sup>Required</sup> <a name="tableNames" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.tableNames"></a>

```java
public java.util.List<java.lang.String> getTableNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTablesForDiscovery">DataSafeDiscoveryJobTablesForDiscovery</a>

---


### DataSafeDiscoveryJobTimeoutsOutputReference <a name="DataSafeDiscoveryJobTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_discovery_job.DataSafeDiscoveryJobTimeoutsOutputReference;

new DataSafeDiscoveryJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJob.DataSafeDiscoveryJobTimeouts">DataSafeDiscoveryJobTimeouts</a>

---



