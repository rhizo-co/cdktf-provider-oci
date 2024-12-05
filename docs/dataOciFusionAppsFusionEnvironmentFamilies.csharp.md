# `dataOciFusionAppsFusionEnvironmentFamilies` Submodule <a name="`dataOciFusionAppsFusionEnvironmentFamilies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentFamilies <a name="DataOciFusionAppsFusionEnvironmentFamilies" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families oci_fusion_apps_fusion_environment_families}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentFamilies(Construct Scope, string Id, DataOciFusionAppsFusionEnvironmentFamiliesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig">DataOciFusionAppsFusionEnvironmentFamiliesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig">DataOciFusionAppsFusionEnvironmentFamiliesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetFusionEnvironmentFamilyId">ResetFusionEnvironmentFamilyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetFusionEnvironmentFamilyId` <a name="ResetFusionEnvironmentFamilyId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetFusionEnvironmentFamilyId"></a>

```csharp
private void ResetFusionEnvironmentFamilyId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentFamilies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFusionAppsFusionEnvironmentFamilies.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFusionAppsFusionEnvironmentFamilies.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFusionAppsFusionEnvironmentFamilies.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFusionAppsFusionEnvironmentFamilies.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentFamilies resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentFamilies to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFusionAppsFusionEnvironmentFamilies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentFamilies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList">DataOciFusionAppsFusionEnvironmentFamiliesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.fusionEnvironmentFamilyCollection">FusionEnvironmentFamilyCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.fusionEnvironmentFamilyIdInput">FusionEnvironmentFamilyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.fusionEnvironmentFamilyId">FusionEnvironmentFamilyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.filter"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentFamiliesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList">DataOciFusionAppsFusionEnvironmentFamiliesFilterList</a>

---

##### `FusionEnvironmentFamilyCollection`<sup>Required</sup> <a name="FusionEnvironmentFamilyCollection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.fusionEnvironmentFamilyCollection"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList FusionEnvironmentFamilyCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `FusionEnvironmentFamilyIdInput`<sup>Optional</sup> <a name="FusionEnvironmentFamilyIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.fusionEnvironmentFamilyIdInput"></a>

```csharp
public string FusionEnvironmentFamilyIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FusionEnvironmentFamilyId`<sup>Required</sup> <a name="FusionEnvironmentFamilyId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.fusionEnvironmentFamilyId"></a>

```csharp
public string FusionEnvironmentFamilyId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamilies.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentFamiliesConfig <a name="DataOciFusionAppsFusionEnvironmentFamiliesConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentFamiliesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName = null,
    object Filter = null,
    string FusionEnvironmentFamilyId = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#compartment_id DataOciFusionAppsFusionEnvironmentFamilies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#display_name DataOciFusionAppsFusionEnvironmentFamilies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.fusionEnvironmentFamilyId">FusionEnvironmentFamilyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#fusion_environment_family_id DataOciFusionAppsFusionEnvironmentFamilies#fusion_environment_family_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#id DataOciFusionAppsFusionEnvironmentFamilies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#state DataOciFusionAppsFusionEnvironmentFamilies#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#compartment_id DataOciFusionAppsFusionEnvironmentFamilies#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#display_name DataOciFusionAppsFusionEnvironmentFamilies#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#filter DataOciFusionAppsFusionEnvironmentFamilies#filter}

---

##### `FusionEnvironmentFamilyId`<sup>Optional</sup> <a name="FusionEnvironmentFamilyId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.fusionEnvironmentFamilyId"></a>

```csharp
public string FusionEnvironmentFamilyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#fusion_environment_family_id DataOciFusionAppsFusionEnvironmentFamilies#fusion_environment_family_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#id DataOciFusionAppsFusionEnvironmentFamilies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#state DataOciFusionAppsFusionEnvironmentFamilies#state}.

---

### DataOciFusionAppsFusionEnvironmentFamiliesFilter <a name="DataOciFusionAppsFusionEnvironmentFamiliesFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentFamiliesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#name DataOciFusionAppsFusionEnvironmentFamilies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#values DataOciFusionAppsFusionEnvironmentFamilies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#regex DataOciFusionAppsFusionEnvironmentFamilies#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#name DataOciFusionAppsFusionEnvironmentFamilies#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#values DataOciFusionAppsFusionEnvironmentFamilies#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_families#regex DataOciFusionAppsFusionEnvironmentFamilies#regex}.

---

### DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollection <a name="DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollection {

};
```


### DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItems <a name="DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItems {

};
```


### DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicy <a name="DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicy" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicy {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentFamiliesFilterList <a name="DataOciFusionAppsFusionEnvironmentFamiliesFilterList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentFamiliesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.get"></a>

```csharp
private DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference <a name="DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList <a name="DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.get"></a>

```csharp
private DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference <a name="DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.concurrentMaintenance">ConcurrentMaintenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.isMonthlyPatchingEnabled">IsMonthlyPatchingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimes">QuarterlyUpgradeBeginTimes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicy">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConcurrentMaintenance`<sup>Required</sup> <a name="ConcurrentMaintenance" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.concurrentMaintenance"></a>

```csharp
public string ConcurrentMaintenance { get; }
```

- *Type:* string

---

##### `IsMonthlyPatchingEnabled`<sup>Required</sup> <a name="IsMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.isMonthlyPatchingEnabled"></a>

```csharp
public IResolvable IsMonthlyPatchingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `QuarterlyUpgradeBeginTimes`<sup>Required</sup> <a name="QuarterlyUpgradeBeginTimes" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimes"></a>

```csharp
public string QuarterlyUpgradeBeginTimes { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyOutputReference.property.internalValue"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicy">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicy</a>

---


### DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList <a name="DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.get"></a>

```csharp
private DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference <a name="DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.familyMaintenancePolicy">FamilyMaintenancePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.isSubscriptionUpdateNeeded">IsSubscriptionUpdateNeeded</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.subscriptionIds">SubscriptionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.systemName">SystemName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItems">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FamilyMaintenancePolicy`<sup>Required</sup> <a name="FamilyMaintenancePolicy" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.familyMaintenancePolicy"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList FamilyMaintenancePolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsFamilyMaintenancePolicyList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsSubscriptionUpdateNeeded`<sup>Required</sup> <a name="IsSubscriptionUpdateNeeded" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.isSubscriptionUpdateNeeded"></a>

```csharp
public IResolvable IsSubscriptionUpdateNeeded { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubscriptionIds`<sup>Required</sup> <a name="SubscriptionIds" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.subscriptionIds"></a>

```csharp
public string[] SubscriptionIds { get; }
```

- *Type:* string[]

---

##### `SystemName`<sup>Required</sup> <a name="SystemName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.systemName"></a>

```csharp
public string SystemName { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItems">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItems</a>

---


### DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList <a name="DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.get"></a>

```csharp
private DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference <a name="DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollection">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.property.items"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentFamilies.DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollection">DataOciFusionAppsFusionEnvironmentFamiliesFusionEnvironmentFamilyCollection</a>

---



