# `dataOciAdmRemediationRunStage` Submodule <a name="`dataOciAdmRemediationRunStage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAdmRemediationRunStage <a name="DataOciAdmRemediationRunStage" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stage oci_adm_remediation_run_stage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAdmRemediationRunStage(Construct Scope, string Id, DataOciAdmRemediationRunStageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig">DataOciAdmRemediationRunStageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig">DataOciAdmRemediationRunStageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAdmRemediationRunStage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAdmRemediationRunStage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAdmRemediationRunStage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAdmRemediationRunStage.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAdmRemediationRunStage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciAdmRemediationRunStage resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAdmRemediationRunStage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAdmRemediationRunStage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stage#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAdmRemediationRunStage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.auditId">AuditId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.nextStageType">NextStageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.pipelineProperties">PipelineProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList">DataOciAdmRemediationRunStagePipelinePropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.previousStageType">PreviousStageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.pullRequestProperties">PullRequestProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList">DataOciAdmRemediationRunStagePullRequestPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.recommendedUpdatesCount">RecommendedUpdatesCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.summary">Summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.timeFinished">TimeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.remediationRunIdInput">RemediationRunIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.stageTypeInput">StageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.remediationRunId">RemediationRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.stageType">StageType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AuditId`<sup>Required</sup> <a name="AuditId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.auditId"></a>

```csharp
public string AuditId { get; }
```

- *Type:* string

---

##### `NextStageType`<sup>Required</sup> <a name="NextStageType" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.nextStageType"></a>

```csharp
public string NextStageType { get; }
```

- *Type:* string

---

##### `PipelineProperties`<sup>Required</sup> <a name="PipelineProperties" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.pipelineProperties"></a>

```csharp
public DataOciAdmRemediationRunStagePipelinePropertiesList PipelineProperties { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList">DataOciAdmRemediationRunStagePipelinePropertiesList</a>

---

##### `PreviousStageType`<sup>Required</sup> <a name="PreviousStageType" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.previousStageType"></a>

```csharp
public string PreviousStageType { get; }
```

- *Type:* string

---

##### `PullRequestProperties`<sup>Required</sup> <a name="PullRequestProperties" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.pullRequestProperties"></a>

```csharp
public DataOciAdmRemediationRunStagePullRequestPropertiesList PullRequestProperties { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList">DataOciAdmRemediationRunStagePullRequestPropertiesList</a>

---

##### `RecommendedUpdatesCount`<sup>Required</sup> <a name="RecommendedUpdatesCount" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.recommendedUpdatesCount"></a>

```csharp
public double RecommendedUpdatesCount { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.summary"></a>

```csharp
public string Summary { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.timeFinished"></a>

```csharp
public string TimeFinished { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RemediationRunIdInput`<sup>Optional</sup> <a name="RemediationRunIdInput" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.remediationRunIdInput"></a>

```csharp
public string RemediationRunIdInput { get; }
```

- *Type:* string

---

##### `StageTypeInput`<sup>Optional</sup> <a name="StageTypeInput" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.stageTypeInput"></a>

```csharp
public string StageTypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RemediationRunId`<sup>Required</sup> <a name="RemediationRunId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.remediationRunId"></a>

```csharp
public string RemediationRunId { get; }
```

- *Type:* string

---

##### `StageType`<sup>Required</sup> <a name="StageType" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.stageType"></a>

```csharp
public string StageType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAdmRemediationRunStageConfig <a name="DataOciAdmRemediationRunStageConfig" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAdmRemediationRunStageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string RemediationRunId,
    string StageType,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig.property.remediationRunId">RemediationRunId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stage#remediation_run_id DataOciAdmRemediationRunStage#remediation_run_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig.property.stageType">StageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stage#stage_type DataOciAdmRemediationRunStage#stage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stage#id DataOciAdmRemediationRunStage#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `RemediationRunId`<sup>Required</sup> <a name="RemediationRunId" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig.property.remediationRunId"></a>

```csharp
public string RemediationRunId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stage#remediation_run_id DataOciAdmRemediationRunStage#remediation_run_id}.

---

##### `StageType`<sup>Required</sup> <a name="StageType" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig.property.stageType"></a>

```csharp
public string StageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stage#stage_type DataOciAdmRemediationRunStage#stage_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/adm_remediation_run_stage#id DataOciAdmRemediationRunStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciAdmRemediationRunStagePipelineProperties <a name="DataOciAdmRemediationRunStagePipelineProperties" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelineProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelineProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAdmRemediationRunStagePipelineProperties {

};
```


### DataOciAdmRemediationRunStagePullRequestProperties <a name="DataOciAdmRemediationRunStagePullRequestProperties" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAdmRemediationRunStagePullRequestProperties {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAdmRemediationRunStagePipelinePropertiesList <a name="DataOciAdmRemediationRunStagePipelinePropertiesList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAdmRemediationRunStagePipelinePropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.get"></a>

```csharp
private DataOciAdmRemediationRunStagePipelinePropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAdmRemediationRunStagePipelinePropertiesOutputReference <a name="DataOciAdmRemediationRunStagePipelinePropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAdmRemediationRunStagePipelinePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.property.pipelineIdentifier">PipelineIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.property.pipelineUrl">PipelineUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelineProperties">DataOciAdmRemediationRunStagePipelineProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PipelineIdentifier`<sup>Required</sup> <a name="PipelineIdentifier" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.property.pipelineIdentifier"></a>

```csharp
public string PipelineIdentifier { get; }
```

- *Type:* string

---

##### `PipelineUrl`<sup>Required</sup> <a name="PipelineUrl" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.property.pipelineUrl"></a>

```csharp
public string PipelineUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelinePropertiesOutputReference.property.internalValue"></a>

```csharp
public DataOciAdmRemediationRunStagePipelineProperties InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePipelineProperties">DataOciAdmRemediationRunStagePipelineProperties</a>

---


### DataOciAdmRemediationRunStagePullRequestPropertiesList <a name="DataOciAdmRemediationRunStagePullRequestPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAdmRemediationRunStagePullRequestPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.get"></a>

```csharp
private DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference <a name="DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.property.pullRequestIdentifier">PullRequestIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.property.pullRequestUrl">PullRequestUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestProperties">DataOciAdmRemediationRunStagePullRequestProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PullRequestIdentifier`<sup>Required</sup> <a name="PullRequestIdentifier" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.property.pullRequestIdentifier"></a>

```csharp
public string PullRequestIdentifier { get; }
```

- *Type:* string

---

##### `PullRequestUrl`<sup>Required</sup> <a name="PullRequestUrl" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.property.pullRequestUrl"></a>

```csharp
public string PullRequestUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataOciAdmRemediationRunStagePullRequestProperties InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAdmRemediationRunStage.DataOciAdmRemediationRunStagePullRequestProperties">DataOciAdmRemediationRunStagePullRequestProperties</a>

---



