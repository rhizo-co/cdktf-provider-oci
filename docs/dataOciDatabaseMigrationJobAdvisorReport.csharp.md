# `dataOciDatabaseMigrationJobAdvisorReport` Submodule <a name="`dataOciDatabaseMigrationJobAdvisorReport` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseMigrationJobAdvisorReport <a name="DataOciDatabaseMigrationJobAdvisorReport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report oci_database_migration_job_advisor_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseMigrationJobAdvisorReport(Construct Scope, string Id, DataOciDatabaseMigrationJobAdvisorReportConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig">DataOciDatabaseMigrationJobAdvisorReportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig">DataOciDatabaseMigrationJobAdvisorReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseMigrationJobAdvisorReport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseMigrationJobAdvisorReport.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseMigrationJobAdvisorReport.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseMigrationJobAdvisorReport.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseMigrationJobAdvisorReport.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseMigrationJobAdvisorReport resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseMigrationJobAdvisorReport to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseMigrationJobAdvisorReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseMigrationJobAdvisorReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfFatal">NumberOfFatal</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfFatalBlockers">NumberOfFatalBlockers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfInformationalResults">NumberOfInformationalResults</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfWarnings">NumberOfWarnings</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.reportLocationDetails">ReportLocationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.result">Result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.jobIdInput">JobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.jobId">JobId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `NumberOfFatal`<sup>Required</sup> <a name="NumberOfFatal" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfFatal"></a>

```csharp
public double NumberOfFatal { get; }
```

- *Type:* double

---

##### `NumberOfFatalBlockers`<sup>Required</sup> <a name="NumberOfFatalBlockers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfFatalBlockers"></a>

```csharp
public double NumberOfFatalBlockers { get; }
```

- *Type:* double

---

##### `NumberOfInformationalResults`<sup>Required</sup> <a name="NumberOfInformationalResults" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfInformationalResults"></a>

```csharp
public double NumberOfInformationalResults { get; }
```

- *Type:* double

---

##### `NumberOfWarnings`<sup>Required</sup> <a name="NumberOfWarnings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfWarnings"></a>

```csharp
public double NumberOfWarnings { get; }
```

- *Type:* double

---

##### `ReportLocationDetails`<sup>Required</sup> <a name="ReportLocationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.reportLocationDetails"></a>

```csharp
public DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList ReportLocationDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList</a>

---

##### `Result`<sup>Required</sup> <a name="Result" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.result"></a>

```csharp
public string Result { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JobIdInput`<sup>Optional</sup> <a name="JobIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.jobIdInput"></a>

```csharp
public string JobIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.jobId"></a>

```csharp
public string JobId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseMigrationJobAdvisorReportConfig <a name="DataOciDatabaseMigrationJobAdvisorReportConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseMigrationJobAdvisorReportConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string JobId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.jobId">JobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#job_id DataOciDatabaseMigrationJobAdvisorReport#job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#id DataOciDatabaseMigrationJobAdvisorReport#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.jobId"></a>

```csharp
public string JobId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#job_id DataOciDatabaseMigrationJobAdvisorReport#job_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#id DataOciDatabaseMigrationJobAdvisorReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails {

};
```


### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.get"></a>

```csharp
private DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.get"></a>

```csharp
private DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails</a>

---


### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.locationInSource">LocationInSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.objectStorageDetails">ObjectStorageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationInSource`<sup>Required</sup> <a name="LocationInSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.locationInSource"></a>

```csharp
public string LocationInSource { get; }
```

- *Type:* string

---

##### `ObjectStorageDetails`<sup>Required</sup> <a name="ObjectStorageDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.objectStorageDetails"></a>

```csharp
public DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList ObjectStorageDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails</a>

---



