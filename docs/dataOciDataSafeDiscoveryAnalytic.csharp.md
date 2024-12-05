# `dataOciDataSafeDiscoveryAnalytic` Submodule <a name="`dataOciDataSafeDiscoveryAnalytic` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeDiscoveryAnalytic <a name="DataOciDataSafeDiscoveryAnalytic" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytic oci_data_safe_discovery_analytic}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryAnalytic(Construct Scope, string Id, DataOciDataSafeDiscoveryAnalyticConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig">DataOciDataSafeDiscoveryAnalyticConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig">DataOciDataSafeDiscoveryAnalyticConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.resetSensitiveDataModelId">ResetSensitiveDataModelId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.resetTargetId">ResetTargetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.resetCompartmentIdInSubtree"></a>

```csharp
private void ResetCompartmentIdInSubtree()
```

##### `ResetGroupBy` <a name="ResetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.resetGroupBy"></a>

```csharp
private void ResetGroupBy()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSensitiveDataModelId` <a name="ResetSensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.resetSensitiveDataModelId"></a>

```csharp
private void ResetSensitiveDataModelId()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.resetTargetId"></a>

```csharp
private void ResetTargetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeDiscoveryAnalytic resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeDiscoveryAnalytic.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeDiscoveryAnalytic.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeDiscoveryAnalytic.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeDiscoveryAnalytic.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeDiscoveryAnalytic resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeDiscoveryAnalytic to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeDiscoveryAnalytic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytic#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeDiscoveryAnalytic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList">DataOciDataSafeDiscoveryAnalyticItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.groupByInput">GroupByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.sensitiveDataModelIdInput">SensitiveDataModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.targetIdInput">TargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.groupBy">GroupBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.items"></a>

```csharp
public DataOciDataSafeDiscoveryAnalyticItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList">DataOciDataSafeDiscoveryAnalyticItemsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.compartmentIdInSubtreeInput"></a>

```csharp
public object CompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.groupByInput"></a>

```csharp
public string GroupByInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SensitiveDataModelIdInput`<sup>Optional</sup> <a name="SensitiveDataModelIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.sensitiveDataModelIdInput"></a>

```csharp
public string SensitiveDataModelIdInput { get; }
```

- *Type:* string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.targetIdInput"></a>

```csharp
public string TargetIdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.groupBy"></a>

```csharp
public string GroupBy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SensitiveDataModelId`<sup>Required</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.sensitiveDataModelId"></a>

```csharp
public string SensitiveDataModelId { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalytic.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeDiscoveryAnalyticConfig <a name="DataOciDataSafeDiscoveryAnalyticConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryAnalyticConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    object CompartmentIdInSubtree = null,
    string GroupBy = null,
    string Id = null,
    string SensitiveDataModelId = null,
    string TargetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytic#compartment_id DataOciDataSafeDiscoveryAnalytic#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytic#compartment_id_in_subtree DataOciDataSafeDiscoveryAnalytic#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.groupBy">GroupBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytic#group_by DataOciDataSafeDiscoveryAnalytic#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytic#id DataOciDataSafeDiscoveryAnalytic#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytic#sensitive_data_model_id DataOciDataSafeDiscoveryAnalytic#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.targetId">TargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytic#target_id DataOciDataSafeDiscoveryAnalytic#target_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytic#compartment_id DataOciDataSafeDiscoveryAnalytic#compartment_id}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.compartmentIdInSubtree"></a>

```csharp
public object CompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytic#compartment_id_in_subtree DataOciDataSafeDiscoveryAnalytic#compartment_id_in_subtree}.

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.groupBy"></a>

```csharp
public string GroupBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytic#group_by DataOciDataSafeDiscoveryAnalytic#group_by}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytic#id DataOciDataSafeDiscoveryAnalytic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SensitiveDataModelId`<sup>Optional</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.sensitiveDataModelId"></a>

```csharp
public string SensitiveDataModelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytic#sensitive_data_model_id DataOciDataSafeDiscoveryAnalytic#sensitive_data_model_id}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticConfig.property.targetId"></a>

```csharp
public string TargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_analytic#target_id DataOciDataSafeDiscoveryAnalytic#target_id}.

---

### DataOciDataSafeDiscoveryAnalyticItems <a name="DataOciDataSafeDiscoveryAnalyticItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryAnalyticItems {

};
```


### DataOciDataSafeDiscoveryAnalyticItemsDimensions <a name="DataOciDataSafeDiscoveryAnalyticItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryAnalyticItemsDimensions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeDiscoveryAnalyticItemsDimensionsList <a name="DataOciDataSafeDiscoveryAnalyticItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryAnalyticItemsDimensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.get"></a>

```csharp
private DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference <a name="DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensions">DataOciDataSafeDiscoveryAnalyticItemsDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SensitiveDataModelId`<sup>Required</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.property.sensitiveDataModelId"></a>

```csharp
public string SensitiveDataModelId { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeDiscoveryAnalyticItemsDimensions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensions">DataOciDataSafeDiscoveryAnalyticItemsDimensions</a>

---


### DataOciDataSafeDiscoveryAnalyticItemsList <a name="DataOciDataSafeDiscoveryAnalyticItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryAnalyticItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.get"></a>

```csharp
private DataOciDataSafeDiscoveryAnalyticItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeDiscoveryAnalyticItemsOutputReference <a name="DataOciDataSafeDiscoveryAnalyticItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeDiscoveryAnalyticItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.property.count">Count</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList">DataOciDataSafeDiscoveryAnalyticItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItems">DataOciDataSafeDiscoveryAnalyticItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.property.count"></a>

```csharp
public string Count { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.property.dimensions"></a>

```csharp
public DataOciDataSafeDiscoveryAnalyticItemsDimensionsList Dimensions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsDimensionsList">DataOciDataSafeDiscoveryAnalyticItemsDimensionsList</a>

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeDiscoveryAnalyticItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryAnalytic.DataOciDataSafeDiscoveryAnalyticItems">DataOciDataSafeDiscoveryAnalyticItems</a>

---



