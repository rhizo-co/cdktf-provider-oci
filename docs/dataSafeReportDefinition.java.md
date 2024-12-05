# `dataSafeReportDefinition` Submodule <a name="`dataSafeReportDefinition` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeReportDefinition <a name="DataSafeReportDefinition" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition oci_data_safe_report_definition}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_report_definition.DataSafeReportDefinition;

DataSafeReportDefinition.Builder.create(Construct scope, java.lang.String id)
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
    .columnFilters(IResolvable)
    .columnFilters(java.util.List<DataSafeReportDefinitionColumnFilters>)
    .columnInfo(IResolvable)
    .columnInfo(java.util.List<DataSafeReportDefinitionColumnInfo>)
    .columnSortings(IResolvable)
    .columnSortings(java.util.List<DataSafeReportDefinitionColumnSortings>)
    .compartmentId(java.lang.String)
    .displayName(java.lang.String)
    .parentId(java.lang.String)
    .summary(IResolvable)
    .summary(java.util.List<DataSafeReportDefinitionSummary>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(DataSafeReportDefinitionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.columnFilters">columnFilters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>></code> | column_filters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.columnInfo">columnInfo</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>></code> | column_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.columnSortings">columnSortings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>></code> | column_sortings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#compartment_id DataSafeReportDefinition#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_name DataSafeReportDefinition#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.parentId">parentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#parent_id DataSafeReportDefinition#parent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.summary">summary</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>></code> | summary block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#defined_tags DataSafeReportDefinition#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#description DataSafeReportDefinition#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#freeform_tags DataSafeReportDefinition#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#id DataSafeReportDefinition#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `columnFilters`<sup>Required</sup> <a name="columnFilters" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.columnFilters"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>>

column_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#column_filters DataSafeReportDefinition#column_filters}

---

##### `columnInfo`<sup>Required</sup> <a name="columnInfo" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.columnInfo"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>>

column_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#column_info DataSafeReportDefinition#column_info}

---

##### `columnSortings`<sup>Required</sup> <a name="columnSortings" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.columnSortings"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>>

column_sortings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#column_sortings DataSafeReportDefinition#column_sortings}

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#compartment_id DataSafeReportDefinition#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_name DataSafeReportDefinition#display_name}.

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.parentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#parent_id DataSafeReportDefinition#parent_id}.

---

##### `summary`<sup>Required</sup> <a name="summary" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.summary"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>>

summary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#summary DataSafeReportDefinition#summary}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#defined_tags DataSafeReportDefinition#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#description DataSafeReportDefinition#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#freeform_tags DataSafeReportDefinition#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#id DataSafeReportDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#timeouts DataSafeReportDefinition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnFilters">putColumnFilters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnInfo">putColumnInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnSortings">putColumnSortings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putSummary">putSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putColumnFilters` <a name="putColumnFilters" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnFilters"></a>

```java
public void putColumnFilters(IResolvable OR java.util.List<DataSafeReportDefinitionColumnFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnFilters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>>

---

##### `putColumnInfo` <a name="putColumnInfo" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnInfo"></a>

```java
public void putColumnInfo(IResolvable OR java.util.List<DataSafeReportDefinitionColumnInfo> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnInfo.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>>

---

##### `putColumnSortings` <a name="putColumnSortings" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnSortings"></a>

```java
public void putColumnSortings(IResolvable OR java.util.List<DataSafeReportDefinitionColumnSortings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putColumnSortings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>>

---

##### `putSummary` <a name="putSummary" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putSummary"></a>

```java
public void putSummary(IResolvable OR java.util.List<DataSafeReportDefinitionSummary> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putSummary.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putTimeouts"></a>

```java
public void putTimeouts(DataSafeReportDefinitionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeReportDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_report_definition.DataSafeReportDefinition;

DataSafeReportDefinition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_report_definition.DataSafeReportDefinition;

DataSafeReportDefinition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_report_definition.DataSafeReportDefinition;

DataSafeReportDefinition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_report_definition.DataSafeReportDefinition;

DataSafeReportDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSafeReportDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataSafeReportDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSafeReportDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSafeReportDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeReportDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnFilters">columnFilters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList">DataSafeReportDefinitionColumnFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnInfo">columnInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList">DataSafeReportDefinitionColumnInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnSortings">columnSortings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList">DataSafeReportDefinitionColumnSortingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.complianceStandards">complianceStandards</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.dataSource">dataSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayOrder">displayOrder</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.isSeeded">isSeeded</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.recordTimeSpan">recordTimeSpan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportCompartmentId">scheduledReportCompartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportMimeType">scheduledReportMimeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportName">scheduledReportName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportRowLimit">scheduledReportRowLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scimFilter">scimFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.summary">summary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList">DataSafeReportDefinitionSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference">DataSafeReportDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnFiltersInput">columnFiltersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnInfoInput">columnInfoInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnSortingsInput">columnSortingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.parentIdInput">parentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.summaryInput">summaryInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.parentId">parentId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `columnFilters`<sup>Required</sup> <a name="columnFilters" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnFilters"></a>

```java
public DataSafeReportDefinitionColumnFiltersList getColumnFilters();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList">DataSafeReportDefinitionColumnFiltersList</a>

---

##### `columnInfo`<sup>Required</sup> <a name="columnInfo" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnInfo"></a>

```java
public DataSafeReportDefinitionColumnInfoList getColumnInfo();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList">DataSafeReportDefinitionColumnInfoList</a>

---

##### `columnSortings`<sup>Required</sup> <a name="columnSortings" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnSortings"></a>

```java
public DataSafeReportDefinitionColumnSortingsList getColumnSortings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList">DataSafeReportDefinitionColumnSortingsList</a>

---

##### `complianceStandards`<sup>Required</sup> <a name="complianceStandards" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.complianceStandards"></a>

```java
public java.util.List<java.lang.String> getComplianceStandards();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.dataSource"></a>

```java
public java.lang.String getDataSource();
```

- *Type:* java.lang.String

---

##### `displayOrder`<sup>Required</sup> <a name="displayOrder" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayOrder"></a>

```java
public java.lang.Number getDisplayOrder();
```

- *Type:* java.lang.Number

---

##### `isSeeded`<sup>Required</sup> <a name="isSeeded" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.isSeeded"></a>

```java
public IResolvable getIsSeeded();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `recordTimeSpan`<sup>Required</sup> <a name="recordTimeSpan" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.recordTimeSpan"></a>

```java
public java.lang.String getRecordTimeSpan();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `scheduledReportCompartmentId`<sup>Required</sup> <a name="scheduledReportCompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportCompartmentId"></a>

```java
public java.lang.String getScheduledReportCompartmentId();
```

- *Type:* java.lang.String

---

##### `scheduledReportMimeType`<sup>Required</sup> <a name="scheduledReportMimeType" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportMimeType"></a>

```java
public java.lang.String getScheduledReportMimeType();
```

- *Type:* java.lang.String

---

##### `scheduledReportName`<sup>Required</sup> <a name="scheduledReportName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportName"></a>

```java
public java.lang.String getScheduledReportName();
```

- *Type:* java.lang.String

---

##### `scheduledReportRowLimit`<sup>Required</sup> <a name="scheduledReportRowLimit" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scheduledReportRowLimit"></a>

```java
public java.lang.Number getScheduledReportRowLimit();
```

- *Type:* java.lang.Number

---

##### `scimFilter`<sup>Required</sup> <a name="scimFilter" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.scimFilter"></a>

```java
public java.lang.String getScimFilter();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `summary`<sup>Required</sup> <a name="summary" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.summary"></a>

```java
public DataSafeReportDefinitionSummaryList getSummary();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList">DataSafeReportDefinitionSummaryList</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeouts"></a>

```java
public DataSafeReportDefinitionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference">DataSafeReportDefinitionTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `columnFiltersInput`<sup>Optional</sup> <a name="columnFiltersInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnFiltersInput"></a>

```java
public java.lang.Object getColumnFiltersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>>

---

##### `columnInfoInput`<sup>Optional</sup> <a name="columnInfoInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnInfoInput"></a>

```java
public java.lang.Object getColumnInfoInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>>

---

##### `columnSortingsInput`<sup>Optional</sup> <a name="columnSortingsInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.columnSortingsInput"></a>

```java
public java.lang.Object getColumnSortingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.parentIdInput"></a>

```java
public java.lang.String getParentIdInput();
```

- *Type:* java.lang.String

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.summaryInput"></a>

```java
public java.lang.Object getSummaryInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.parentId"></a>

```java
public java.lang.String getParentId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeReportDefinitionColumnFilters <a name="DataSafeReportDefinitionColumnFilters" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_report_definition.DataSafeReportDefinitionColumnFilters;

DataSafeReportDefinitionColumnFilters.builder()
    .expressions(java.util.List<java.lang.String>)
    .fieldName(java.lang.String)
    .isEnabled(java.lang.Boolean)
    .isEnabled(IResolvable)
    .isHidden(java.lang.Boolean)
    .isHidden(IResolvable)
    .operator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.expressions">expressions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#expressions DataSafeReportDefinition#expressions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_enabled DataSafeReportDefinition#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.isHidden">isHidden</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#operator DataSafeReportDefinition#operator}. |

---

##### `expressions`<sup>Required</sup> <a name="expressions" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.expressions"></a>

```java
public java.util.List<java.lang.String> getExpressions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#expressions DataSafeReportDefinition#expressions}.

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}.

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_enabled DataSafeReportDefinition#is_enabled}.

---

##### `isHidden`<sup>Required</sup> <a name="isHidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.isHidden"></a>

```java
public java.lang.Object getIsHidden();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#operator DataSafeReportDefinition#operator}.

---

### DataSafeReportDefinitionColumnInfo <a name="DataSafeReportDefinitionColumnInfo" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_report_definition.DataSafeReportDefinitionColumnInfo;

DataSafeReportDefinitionColumnInfo.builder()
    .displayName(java.lang.String)
    .displayOrder(java.lang.Number)
    .fieldName(java.lang.String)
    .isHidden(java.lang.Boolean)
    .isHidden(IResolvable)
//  .dataType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_name DataSafeReportDefinition#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.displayOrder">displayOrder</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_order DataSafeReportDefinition#display_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.isHidden">isHidden</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.dataType">dataType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#data_type DataSafeReportDefinition#data_type}. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_name DataSafeReportDefinition#display_name}.

---

##### `displayOrder`<sup>Required</sup> <a name="displayOrder" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.displayOrder"></a>

```java
public java.lang.Number getDisplayOrder();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_order DataSafeReportDefinition#display_order}.

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}.

---

##### `isHidden`<sup>Required</sup> <a name="isHidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.isHidden"></a>

```java
public java.lang.Object getIsHidden();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}.

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#data_type DataSafeReportDefinition#data_type}.

---

### DataSafeReportDefinitionColumnSortings <a name="DataSafeReportDefinitionColumnSortings" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_report_definition.DataSafeReportDefinitionColumnSortings;

DataSafeReportDefinitionColumnSortings.builder()
    .fieldName(java.lang.String)
    .isAscending(java.lang.Boolean)
    .isAscending(IResolvable)
    .sortingOrder(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.isAscending">isAscending</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_ascending DataSafeReportDefinition#is_ascending}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.sortingOrder">sortingOrder</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#sorting_order DataSafeReportDefinition#sorting_order}. |

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#field_name DataSafeReportDefinition#field_name}.

---

##### `isAscending`<sup>Required</sup> <a name="isAscending" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.isAscending"></a>

```java
public java.lang.Object getIsAscending();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_ascending DataSafeReportDefinition#is_ascending}.

---

##### `sortingOrder`<sup>Required</sup> <a name="sortingOrder" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings.property.sortingOrder"></a>

```java
public java.lang.Number getSortingOrder();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#sorting_order DataSafeReportDefinition#sorting_order}.

---

### DataSafeReportDefinitionConfig <a name="DataSafeReportDefinitionConfig" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_report_definition.DataSafeReportDefinitionConfig;

DataSafeReportDefinitionConfig.builder()
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
    .columnFilters(IResolvable)
    .columnFilters(java.util.List<DataSafeReportDefinitionColumnFilters>)
    .columnInfo(IResolvable)
    .columnInfo(java.util.List<DataSafeReportDefinitionColumnInfo>)
    .columnSortings(IResolvable)
    .columnSortings(java.util.List<DataSafeReportDefinitionColumnSortings>)
    .compartmentId(java.lang.String)
    .displayName(java.lang.String)
    .parentId(java.lang.String)
    .summary(IResolvable)
    .summary(java.util.List<DataSafeReportDefinitionSummary>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(DataSafeReportDefinitionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnFilters">columnFilters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>></code> | column_filters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnInfo">columnInfo</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>></code> | column_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnSortings">columnSortings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>></code> | column_sortings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#compartment_id DataSafeReportDefinition#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_name DataSafeReportDefinition#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.parentId">parentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#parent_id DataSafeReportDefinition#parent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.summary">summary</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>></code> | summary block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#defined_tags DataSafeReportDefinition#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#description DataSafeReportDefinition#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#freeform_tags DataSafeReportDefinition#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#id DataSafeReportDefinition#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `columnFilters`<sup>Required</sup> <a name="columnFilters" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnFilters"></a>

```java
public java.lang.Object getColumnFilters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>>

column_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#column_filters DataSafeReportDefinition#column_filters}

---

##### `columnInfo`<sup>Required</sup> <a name="columnInfo" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnInfo"></a>

```java
public java.lang.Object getColumnInfo();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>>

column_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#column_info DataSafeReportDefinition#column_info}

---

##### `columnSortings`<sup>Required</sup> <a name="columnSortings" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.columnSortings"></a>

```java
public java.lang.Object getColumnSortings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>>

column_sortings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#column_sortings DataSafeReportDefinition#column_sortings}

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#compartment_id DataSafeReportDefinition#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_name DataSafeReportDefinition#display_name}.

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.parentId"></a>

```java
public java.lang.String getParentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#parent_id DataSafeReportDefinition#parent_id}.

---

##### `summary`<sup>Required</sup> <a name="summary" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.summary"></a>

```java
public java.lang.Object getSummary();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>>

summary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#summary DataSafeReportDefinition#summary}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#defined_tags DataSafeReportDefinition#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#description DataSafeReportDefinition#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#freeform_tags DataSafeReportDefinition#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#id DataSafeReportDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionConfig.property.timeouts"></a>

```java
public DataSafeReportDefinitionTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#timeouts DataSafeReportDefinition#timeouts}

---

### DataSafeReportDefinitionSummary <a name="DataSafeReportDefinitionSummary" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_report_definition.DataSafeReportDefinitionSummary;

DataSafeReportDefinitionSummary.builder()
    .displayOrder(java.lang.Number)
    .name(java.lang.String)
//  .countOf(java.lang.String)
//  .groupByFieldName(java.lang.String)
//  .isHidden(java.lang.Boolean)
//  .isHidden(IResolvable)
//  .scimFilter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.displayOrder">displayOrder</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_order DataSafeReportDefinition#display_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#name DataSafeReportDefinition#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.countOf">countOf</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#count_of DataSafeReportDefinition#count_of}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.groupByFieldName">groupByFieldName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#group_by_field_name DataSafeReportDefinition#group_by_field_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.isHidden">isHidden</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.scimFilter">scimFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#scim_filter DataSafeReportDefinition#scim_filter}. |

---

##### `displayOrder`<sup>Required</sup> <a name="displayOrder" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.displayOrder"></a>

```java
public java.lang.Number getDisplayOrder();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#display_order DataSafeReportDefinition#display_order}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#name DataSafeReportDefinition#name}.

---

##### `countOf`<sup>Optional</sup> <a name="countOf" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.countOf"></a>

```java
public java.lang.String getCountOf();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#count_of DataSafeReportDefinition#count_of}.

---

##### `groupByFieldName`<sup>Optional</sup> <a name="groupByFieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.groupByFieldName"></a>

```java
public java.lang.String getGroupByFieldName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#group_by_field_name DataSafeReportDefinition#group_by_field_name}.

---

##### `isHidden`<sup>Optional</sup> <a name="isHidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.isHidden"></a>

```java
public java.lang.Object getIsHidden();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#is_hidden DataSafeReportDefinition#is_hidden}.

---

##### `scimFilter`<sup>Optional</sup> <a name="scimFilter" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary.property.scimFilter"></a>

```java
public java.lang.String getScimFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#scim_filter DataSafeReportDefinition#scim_filter}.

---

### DataSafeReportDefinitionTimeouts <a name="DataSafeReportDefinitionTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_report_definition.DataSafeReportDefinitionTimeouts;

DataSafeReportDefinitionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#create DataSafeReportDefinition#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#delete DataSafeReportDefinition#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#update DataSafeReportDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#create DataSafeReportDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#delete DataSafeReportDefinition#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_report_definition#update DataSafeReportDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeReportDefinitionColumnFiltersList <a name="DataSafeReportDefinitionColumnFiltersList" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_report_definition.DataSafeReportDefinitionColumnFiltersList;

new DataSafeReportDefinitionColumnFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.get"></a>

```java
public DataSafeReportDefinitionColumnFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>>

---


### DataSafeReportDefinitionColumnFiltersOutputReference <a name="DataSafeReportDefinitionColumnFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_report_definition.DataSafeReportDefinitionColumnFiltersOutputReference;

new DataSafeReportDefinitionColumnFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.expressionsInput">expressionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isHiddenInput">isHiddenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.expressions">expressions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isHidden">isHidden</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionsInput`<sup>Optional</sup> <a name="expressionsInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.expressionsInput"></a>

```java
public java.util.List<java.lang.String> getExpressionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fieldNameInput"></a>

```java
public java.lang.String getFieldNameInput();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isHiddenInput`<sup>Optional</sup> <a name="isHiddenInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isHiddenInput"></a>

```java
public java.lang.Object getIsHiddenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `expressions`<sup>Required</sup> <a name="expressions" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.expressions"></a>

```java
public java.util.List<java.lang.String> getExpressions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isHidden`<sup>Required</sup> <a name="isHidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.isHidden"></a>

```java
public java.lang.Object getIsHidden();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFiltersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnFilters">DataSafeReportDefinitionColumnFilters</a>

---


### DataSafeReportDefinitionColumnInfoList <a name="DataSafeReportDefinitionColumnInfoList" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_report_definition.DataSafeReportDefinitionColumnInfoList;

new DataSafeReportDefinitionColumnInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.get"></a>

```java
public DataSafeReportDefinitionColumnInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>>

---


### DataSafeReportDefinitionColumnInfoOutputReference <a name="DataSafeReportDefinitionColumnInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_report_definition.DataSafeReportDefinitionColumnInfoOutputReference;

new DataSafeReportDefinitionColumnInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.resetDataType">resetDataType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataType` <a name="resetDataType" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.resetDataType"></a>

```java
public void resetDataType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.dataTypeInput">dataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayOrderInput">displayOrderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.isHiddenInput">isHiddenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayOrder">displayOrder</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.isHidden">isHidden</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.dataTypeInput"></a>

```java
public java.lang.String getDataTypeInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `displayOrderInput`<sup>Optional</sup> <a name="displayOrderInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayOrderInput"></a>

```java
public java.lang.Number getDisplayOrderInput();
```

- *Type:* java.lang.Number

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fieldNameInput"></a>

```java
public java.lang.String getFieldNameInput();
```

- *Type:* java.lang.String

---

##### `isHiddenInput`<sup>Optional</sup> <a name="isHiddenInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.isHiddenInput"></a>

```java
public java.lang.Object getIsHiddenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `displayOrder`<sup>Required</sup> <a name="displayOrder" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.displayOrder"></a>

```java
public java.lang.Number getDisplayOrder();
```

- *Type:* java.lang.Number

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

---

##### `isHidden`<sup>Required</sup> <a name="isHidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.isHidden"></a>

```java
public java.lang.Object getIsHidden();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfoOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnInfo">DataSafeReportDefinitionColumnInfo</a>

---


### DataSafeReportDefinitionColumnSortingsList <a name="DataSafeReportDefinitionColumnSortingsList" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_report_definition.DataSafeReportDefinitionColumnSortingsList;

new DataSafeReportDefinitionColumnSortingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.get"></a>

```java
public DataSafeReportDefinitionColumnSortingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>>

---


### DataSafeReportDefinitionColumnSortingsOutputReference <a name="DataSafeReportDefinitionColumnSortingsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_report_definition.DataSafeReportDefinitionColumnSortingsOutputReference;

new DataSafeReportDefinitionColumnSortingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.isAscendingInput">isAscendingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.sortingOrderInput">sortingOrderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.isAscending">isAscending</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.sortingOrder">sortingOrder</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fieldNameInput"></a>

```java
public java.lang.String getFieldNameInput();
```

- *Type:* java.lang.String

---

##### `isAscendingInput`<sup>Optional</sup> <a name="isAscendingInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.isAscendingInput"></a>

```java
public java.lang.Object getIsAscendingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sortingOrderInput`<sup>Optional</sup> <a name="sortingOrderInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.sortingOrderInput"></a>

```java
public java.lang.Number getSortingOrderInput();
```

- *Type:* java.lang.Number

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

---

##### `isAscending`<sup>Required</sup> <a name="isAscending" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.isAscending"></a>

```java
public java.lang.Object getIsAscending();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sortingOrder`<sup>Required</sup> <a name="sortingOrder" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.sortingOrder"></a>

```java
public java.lang.Number getSortingOrder();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionColumnSortings">DataSafeReportDefinitionColumnSortings</a>

---


### DataSafeReportDefinitionSummaryList <a name="DataSafeReportDefinitionSummaryList" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_report_definition.DataSafeReportDefinitionSummaryList;

new DataSafeReportDefinitionSummaryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.get"></a>

```java
public DataSafeReportDefinitionSummaryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>>

---


### DataSafeReportDefinitionSummaryOutputReference <a name="DataSafeReportDefinitionSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_report_definition.DataSafeReportDefinitionSummaryOutputReference;

new DataSafeReportDefinitionSummaryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetCountOf">resetCountOf</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetGroupByFieldName">resetGroupByFieldName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetIsHidden">resetIsHidden</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetScimFilter">resetScimFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCountOf` <a name="resetCountOf" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetCountOf"></a>

```java
public void resetCountOf()
```

##### `resetGroupByFieldName` <a name="resetGroupByFieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetGroupByFieldName"></a>

```java
public void resetGroupByFieldName()
```

##### `resetIsHidden` <a name="resetIsHidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetIsHidden"></a>

```java
public void resetIsHidden()
```

##### `resetScimFilter` <a name="resetScimFilter" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.resetScimFilter"></a>

```java
public void resetScimFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.countOfInput">countOfInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.displayOrderInput">displayOrderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.groupByFieldNameInput">groupByFieldNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.isHiddenInput">isHiddenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.scimFilterInput">scimFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.countOf">countOf</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.displayOrder">displayOrder</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.groupByFieldName">groupByFieldName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.isHidden">isHidden</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.scimFilter">scimFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countOfInput`<sup>Optional</sup> <a name="countOfInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.countOfInput"></a>

```java
public java.lang.String getCountOfInput();
```

- *Type:* java.lang.String

---

##### `displayOrderInput`<sup>Optional</sup> <a name="displayOrderInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.displayOrderInput"></a>

```java
public java.lang.Number getDisplayOrderInput();
```

- *Type:* java.lang.Number

---

##### `groupByFieldNameInput`<sup>Optional</sup> <a name="groupByFieldNameInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.groupByFieldNameInput"></a>

```java
public java.lang.String getGroupByFieldNameInput();
```

- *Type:* java.lang.String

---

##### `isHiddenInput`<sup>Optional</sup> <a name="isHiddenInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.isHiddenInput"></a>

```java
public java.lang.Object getIsHiddenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scimFilterInput`<sup>Optional</sup> <a name="scimFilterInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.scimFilterInput"></a>

```java
public java.lang.String getScimFilterInput();
```

- *Type:* java.lang.String

---

##### `countOf`<sup>Required</sup> <a name="countOf" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.countOf"></a>

```java
public java.lang.String getCountOf();
```

- *Type:* java.lang.String

---

##### `displayOrder`<sup>Required</sup> <a name="displayOrder" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.displayOrder"></a>

```java
public java.lang.Number getDisplayOrder();
```

- *Type:* java.lang.Number

---

##### `groupByFieldName`<sup>Required</sup> <a name="groupByFieldName" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.groupByFieldName"></a>

```java
public java.lang.String getGroupByFieldName();
```

- *Type:* java.lang.String

---

##### `isHidden`<sup>Required</sup> <a name="isHidden" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.isHidden"></a>

```java
public java.lang.Object getIsHidden();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scimFilter`<sup>Required</sup> <a name="scimFilter" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.scimFilter"></a>

```java
public java.lang.String getScimFilter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummaryOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionSummary">DataSafeReportDefinitionSummary</a>

---


### DataSafeReportDefinitionTimeoutsOutputReference <a name="DataSafeReportDefinitionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_report_definition.DataSafeReportDefinitionTimeoutsOutputReference;

new DataSafeReportDefinitionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeReportDefinition.DataSafeReportDefinitionTimeouts">DataSafeReportDefinitionTimeouts</a>

---



