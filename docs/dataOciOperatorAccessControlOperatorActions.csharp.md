# `dataOciOperatorAccessControlOperatorActions` Submodule <a name="`dataOciOperatorAccessControlOperatorActions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOperatorAccessControlOperatorActions <a name="DataOciOperatorAccessControlOperatorActions" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_actions oci_operator_access_control_operator_actions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlOperatorActions(Construct Scope, string Id, DataOciOperatorAccessControlOperatorActionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig">DataOciOperatorAccessControlOperatorActionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig">DataOciOperatorAccessControlOperatorActionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetResourceType` <a name="ResetResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.resetResourceType"></a>

```csharp
private void ResetResourceType()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOperatorAccessControlOperatorActions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOperatorAccessControlOperatorActions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOperatorAccessControlOperatorActions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOperatorAccessControlOperatorActions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOperatorAccessControlOperatorActions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOperatorAccessControlOperatorActions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOperatorAccessControlOperatorActions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOperatorAccessControlOperatorActions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_actions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOperatorAccessControlOperatorActions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList">DataOciOperatorAccessControlOperatorActionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.operatorActionCollection">OperatorActionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList">DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.filter"></a>

```csharp
public DataOciOperatorAccessControlOperatorActionsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList">DataOciOperatorAccessControlOperatorActionsFilterList</a>

---

##### `OperatorActionCollection`<sup>Required</sup> <a name="OperatorActionCollection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.operatorActionCollection"></a>

```csharp
public DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList OperatorActionCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList">DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOperatorAccessControlOperatorActionsConfig <a name="DataOciOperatorAccessControlOperatorActionsConfig" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlOperatorActionsConfig {
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
    string Name = null,
    string ResourceType = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_actions#compartment_id DataOciOperatorAccessControlOperatorActions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_actions#id DataOciOperatorAccessControlOperatorActions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_actions#name DataOciOperatorAccessControlOperatorActions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_actions#resource_type DataOciOperatorAccessControlOperatorActions#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_actions#state DataOciOperatorAccessControlOperatorActions#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_actions#compartment_id DataOciOperatorAccessControlOperatorActions#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_actions#filter DataOciOperatorAccessControlOperatorActions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_actions#id DataOciOperatorAccessControlOperatorActions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_actions#name DataOciOperatorAccessControlOperatorActions#name}.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_actions#resource_type DataOciOperatorAccessControlOperatorActions#resource_type}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_actions#state DataOciOperatorAccessControlOperatorActions#state}.

---

### DataOciOperatorAccessControlOperatorActionsFilter <a name="DataOciOperatorAccessControlOperatorActionsFilter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlOperatorActionsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_actions#name DataOciOperatorAccessControlOperatorActions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_actions#values DataOciOperatorAccessControlOperatorActions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_actions#regex DataOciOperatorAccessControlOperatorActions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_actions#name DataOciOperatorAccessControlOperatorActions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_actions#values DataOciOperatorAccessControlOperatorActions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_actions#regex DataOciOperatorAccessControlOperatorActions#regex}.

---

### DataOciOperatorAccessControlOperatorActionsOperatorActionCollection <a name="DataOciOperatorAccessControlOperatorActionsOperatorActionCollection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlOperatorActionsOperatorActionCollection {

};
```


### DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItems <a name="DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItems {

};
```


### DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsProperties <a name="DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsProperties" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsProperties {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOperatorAccessControlOperatorActionsFilterList <a name="DataOciOperatorAccessControlOperatorActionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlOperatorActionsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.get"></a>

```csharp
private DataOciOperatorAccessControlOperatorActionsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOperatorAccessControlOperatorActionsFilterOutputReference <a name="DataOciOperatorAccessControlOperatorActionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlOperatorActionsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList <a name="DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.get"></a>

```csharp
private DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference <a name="DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.component">Component</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.customerDisplayName">CustomerDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.properties">Properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList">DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItems">DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Component`<sup>Required</sup> <a name="Component" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.component"></a>

```csharp
public string Component { get; }
```

- *Type:* string

---

##### `CustomerDisplayName`<sup>Required</sup> <a name="CustomerDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.customerDisplayName"></a>

```csharp
public string CustomerDisplayName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.properties"></a>

```csharp
public DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList Properties { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList">DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList</a>

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItems">DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItems</a>

---


### DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList <a name="DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.get"></a>

```csharp
private DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference <a name="DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsProperties">DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsProperties InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsProperties">DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsProperties</a>

---


### DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList <a name="DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.get"></a>

```csharp
private DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference <a name="DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList">DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollection">DataOciOperatorAccessControlOperatorActionsOperatorActionCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.property.items"></a>

```csharp
public DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList">DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciOperatorAccessControlOperatorActionsOperatorActionCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorActions.DataOciOperatorAccessControlOperatorActionsOperatorActionCollection">DataOciOperatorAccessControlOperatorActionsOperatorActionCollection</a>

---



