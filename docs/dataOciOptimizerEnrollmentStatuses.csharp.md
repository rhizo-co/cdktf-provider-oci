# `dataOciOptimizerEnrollmentStatuses` Submodule <a name="`dataOciOptimizerEnrollmentStatuses` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOptimizerEnrollmentStatuses <a name="DataOciOptimizerEnrollmentStatuses" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses oci_optimizer_enrollment_statuses}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOptimizerEnrollmentStatuses(Construct Scope, string Id, DataOciOptimizerEnrollmentStatusesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig">DataOciOptimizerEnrollmentStatusesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig">DataOciOptimizerEnrollmentStatusesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOptimizerEnrollmentStatuses resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOptimizerEnrollmentStatuses.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOptimizerEnrollmentStatuses.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOptimizerEnrollmentStatuses.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOptimizerEnrollmentStatuses.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOptimizerEnrollmentStatuses resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOptimizerEnrollmentStatuses to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOptimizerEnrollmentStatuses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOptimizerEnrollmentStatuses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.enrollmentStatusCollection">EnrollmentStatusCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList">DataOciOptimizerEnrollmentStatusesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `EnrollmentStatusCollection`<sup>Required</sup> <a name="EnrollmentStatusCollection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.enrollmentStatusCollection"></a>

```csharp
public DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList EnrollmentStatusCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.filter"></a>

```csharp
public DataOciOptimizerEnrollmentStatusesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList">DataOciOptimizerEnrollmentStatusesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatuses.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOptimizerEnrollmentStatusesConfig <a name="DataOciOptimizerEnrollmentStatusesConfig" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOptimizerEnrollmentStatusesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    object Filter = null,
    string Id = null,
    string State = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#compartment_id DataOciOptimizerEnrollmentStatuses#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#id DataOciOptimizerEnrollmentStatuses#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#state DataOciOptimizerEnrollmentStatuses#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#status DataOciOptimizerEnrollmentStatuses#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#compartment_id DataOciOptimizerEnrollmentStatuses#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#filter DataOciOptimizerEnrollmentStatuses#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#id DataOciOptimizerEnrollmentStatuses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#state DataOciOptimizerEnrollmentStatuses#state}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#status DataOciOptimizerEnrollmentStatuses#status}.

---

### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection {

};
```


### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems {

};
```


### DataOciOptimizerEnrollmentStatusesFilter <a name="DataOciOptimizerEnrollmentStatusesFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOptimizerEnrollmentStatusesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#name DataOciOptimizerEnrollmentStatuses#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#values DataOciOptimizerEnrollmentStatuses#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#regex DataOciOptimizerEnrollmentStatuses#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#name DataOciOptimizerEnrollmentStatuses#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#values DataOciOptimizerEnrollmentStatuses#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_enrollment_statuses#regex DataOciOptimizerEnrollmentStatuses#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.get"></a>

```csharp
private DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.enrollmentStatusId">EnrollmentStatusId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.statusReason">StatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `EnrollmentStatusId`<sup>Required</sup> <a name="EnrollmentStatusId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.enrollmentStatusId"></a>

```csharp
public string EnrollmentStatusId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.statusReason"></a>

```csharp
public string StatusReason { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItems</a>

---


### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.get"></a>

```csharp
private DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference <a name="DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.items"></a>

```csharp
public DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection">DataOciOptimizerEnrollmentStatusesEnrollmentStatusCollection</a>

---


### DataOciOptimizerEnrollmentStatusesFilterList <a name="DataOciOptimizerEnrollmentStatusesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOptimizerEnrollmentStatusesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.get"></a>

```csharp
private DataOciOptimizerEnrollmentStatusesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOptimizerEnrollmentStatusesFilterOutputReference <a name="DataOciOptimizerEnrollmentStatusesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOptimizerEnrollmentStatusesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerEnrollmentStatuses.DataOciOptimizerEnrollmentStatusesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



