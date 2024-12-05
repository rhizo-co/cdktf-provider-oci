# `dataOciFusionAppsFusionEnvironments` Submodule <a name="`dataOciFusionAppsFusionEnvironments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironments <a name="DataOciFusionAppsFusionEnvironments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments oci_fusion_apps_fusion_environments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironments(Construct Scope, string Id, DataOciFusionAppsFusionEnvironmentsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig">DataOciFusionAppsFusionEnvironmentsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig">DataOciFusionAppsFusionEnvironmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetFusionEnvironmentFamilyId">ResetFusionEnvironmentFamilyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetFusionEnvironmentFamilyId` <a name="ResetFusionEnvironmentFamilyId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetFusionEnvironmentFamilyId"></a>

```csharp
private void ResetFusionEnvironmentFamilyId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironments resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFusionAppsFusionEnvironments.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFusionAppsFusionEnvironments.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFusionAppsFusionEnvironments.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFusionAppsFusionEnvironments.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironments resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironments to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFusionAppsFusionEnvironments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList">DataOciFusionAppsFusionEnvironmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fusionEnvironmentCollection">FusionEnvironmentCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fusionEnvironmentFamilyIdInput">FusionEnvironmentFamilyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fusionEnvironmentFamilyId">FusionEnvironmentFamilyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.filter"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList">DataOciFusionAppsFusionEnvironmentsFilterList</a>

---

##### `FusionEnvironmentCollection`<sup>Required</sup> <a name="FusionEnvironmentCollection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fusionEnvironmentCollection"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList FusionEnvironmentCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `FusionEnvironmentFamilyIdInput`<sup>Optional</sup> <a name="FusionEnvironmentFamilyIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fusionEnvironmentFamilyIdInput"></a>

```csharp
public string FusionEnvironmentFamilyIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FusionEnvironmentFamilyId`<sup>Required</sup> <a name="FusionEnvironmentFamilyId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fusionEnvironmentFamilyId"></a>

```csharp
public string FusionEnvironmentFamilyId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentsConfig <a name="DataOciFusionAppsFusionEnvironmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#compartment_id DataOciFusionAppsFusionEnvironments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#display_name DataOciFusionAppsFusionEnvironments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.fusionEnvironmentFamilyId">FusionEnvironmentFamilyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#fusion_environment_family_id DataOciFusionAppsFusionEnvironments#fusion_environment_family_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#id DataOciFusionAppsFusionEnvironments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#state DataOciFusionAppsFusionEnvironments#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#compartment_id DataOciFusionAppsFusionEnvironments#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#display_name DataOciFusionAppsFusionEnvironments#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#filter DataOciFusionAppsFusionEnvironments#filter}

---

##### `FusionEnvironmentFamilyId`<sup>Optional</sup> <a name="FusionEnvironmentFamilyId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.fusionEnvironmentFamilyId"></a>

```csharp
public string FusionEnvironmentFamilyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#fusion_environment_family_id DataOciFusionAppsFusionEnvironments#fusion_environment_family_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#id DataOciFusionAppsFusionEnvironments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#state DataOciFusionAppsFusionEnvironments#state}.

---

### DataOciFusionAppsFusionEnvironmentsFilter <a name="DataOciFusionAppsFusionEnvironmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#name DataOciFusionAppsFusionEnvironments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#values DataOciFusionAppsFusionEnvironments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#regex DataOciFusionAppsFusionEnvironments#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#name DataOciFusionAppsFusionEnvironments#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#values DataOciFusionAppsFusionEnvironments#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#regex DataOciFusionAppsFusionEnvironments#regex}.

---

### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection {

};
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems {

};
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails {

};
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo {

};
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy {

};
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes {

};
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh {

};
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules {

};
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentsFilterList <a name="DataOciFusionAppsFusionEnvironmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.get"></a>

```csharp
private DataOciFusionAppsFusionEnvironmentsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciFusionAppsFusionEnvironmentsFilterOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.get"></a>

```csharp
private DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.get"></a>

```csharp
private DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.activeKeyId">ActiveKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.activeKeyVersion">ActiveKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.currentKeyLifecycleState">CurrentKeyLifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledKeyId">ScheduledKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledKeyStatus">ScheduledKeyStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledKeyVersion">ScheduledKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledLifecycleState">ScheduledLifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveKeyId`<sup>Required</sup> <a name="ActiveKeyId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.activeKeyId"></a>

```csharp
public string ActiveKeyId { get; }
```

- *Type:* string

---

##### `ActiveKeyVersion`<sup>Required</sup> <a name="ActiveKeyVersion" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.activeKeyVersion"></a>

```csharp
public string ActiveKeyVersion { get; }
```

- *Type:* string

---

##### `CurrentKeyLifecycleState`<sup>Required</sup> <a name="CurrentKeyLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.currentKeyLifecycleState"></a>

```csharp
public string CurrentKeyLifecycleState { get; }
```

- *Type:* string

---

##### `ScheduledKeyId`<sup>Required</sup> <a name="ScheduledKeyId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledKeyId"></a>

```csharp
public string ScheduledKeyId { get; }
```

- *Type:* string

---

##### `ScheduledKeyStatus`<sup>Required</sup> <a name="ScheduledKeyStatus" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledKeyStatus"></a>

```csharp
public string ScheduledKeyStatus { get; }
```

- *Type:* string

---

##### `ScheduledKeyVersion`<sup>Required</sup> <a name="ScheduledKeyVersion" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledKeyVersion"></a>

```csharp
public string ScheduledKeyVersion { get; }
```

- *Type:* string

---

##### `ScheduledLifecycleState`<sup>Required</sup> <a name="ScheduledLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledLifecycleState"></a>

```csharp
public string ScheduledLifecycleState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.internalValue"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.get"></a>

```csharp
private DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.get"></a>

```csharp
private DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.environmentMaintenanceOverride">EnvironmentMaintenanceOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.monthlyPatchingOverride">MonthlyPatchingOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimes">QuarterlyUpgradeBeginTimes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnvironmentMaintenanceOverride`<sup>Required</sup> <a name="EnvironmentMaintenanceOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.environmentMaintenanceOverride"></a>

```csharp
public string EnvironmentMaintenanceOverride { get; }
```

- *Type:* string

---

##### `MonthlyPatchingOverride`<sup>Required</sup> <a name="MonthlyPatchingOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.monthlyPatchingOverride"></a>

```csharp
public string MonthlyPatchingOverride { get; }
```

- *Type:* string

---

##### `QuarterlyUpgradeBeginTimes`<sup>Required</sup> <a name="QuarterlyUpgradeBeginTimes" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimes"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList QuarterlyUpgradeBeginTimes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.internalValue"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.get"></a>

```csharp
private DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.beginTimesValue">BeginTimesValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.overrideType">OverrideType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BeginTimesValue`<sup>Required</sup> <a name="BeginTimesValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.beginTimesValue"></a>

```csharp
public string BeginTimesValue { get; }
```

- *Type:* string

---

##### `OverrideType`<sup>Required</sup> <a name="OverrideType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.overrideType"></a>

```csharp
public string OverrideType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.internalValue"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.additionalLanguagePacks">AdditionalLanguagePacks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.appliedPatchBundles">AppliedPatchBundles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.createFusionEnvironmentAdminUserDetails">CreateFusionEnvironmentAdminUserDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.dnsPrefix">DnsPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.fusionEnvironmentFamilyId">FusionEnvironmentFamilyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.fusionEnvironmentType">FusionEnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.idcsDomainUrl">IdcsDomainUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.isBreakGlassEnabled">IsBreakGlassEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.kmsKeyInfo">KmsKeyInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.lockboxId">LockboxId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.publicUrl">PublicUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.refresh">Refresh</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.subscriptionIds">SubscriptionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.systemName">SystemName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.timeUpcomingMaintenance">TimeUpcomingMaintenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalLanguagePacks`<sup>Required</sup> <a name="AdditionalLanguagePacks" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.additionalLanguagePacks"></a>

```csharp
public string[] AdditionalLanguagePacks { get; }
```

- *Type:* string[]

---

##### `AppliedPatchBundles`<sup>Required</sup> <a name="AppliedPatchBundles" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.appliedPatchBundles"></a>

```csharp
public string[] AppliedPatchBundles { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CreateFusionEnvironmentAdminUserDetails`<sup>Required</sup> <a name="CreateFusionEnvironmentAdminUserDetails" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.createFusionEnvironmentAdminUserDetails"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList CreateFusionEnvironmentAdminUserDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DnsPrefix`<sup>Required</sup> <a name="DnsPrefix" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.dnsPrefix"></a>

```csharp
public string DnsPrefix { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `FusionEnvironmentFamilyId`<sup>Required</sup> <a name="FusionEnvironmentFamilyId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.fusionEnvironmentFamilyId"></a>

```csharp
public string FusionEnvironmentFamilyId { get; }
```

- *Type:* string

---

##### `FusionEnvironmentType`<sup>Required</sup> <a name="FusionEnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.fusionEnvironmentType"></a>

```csharp
public string FusionEnvironmentType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsDomainUrl`<sup>Required</sup> <a name="IdcsDomainUrl" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.idcsDomainUrl"></a>

```csharp
public string IdcsDomainUrl { get; }
```

- *Type:* string

---

##### `IsBreakGlassEnabled`<sup>Required</sup> <a name="IsBreakGlassEnabled" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.isBreakGlassEnabled"></a>

```csharp
public IResolvable IsBreakGlassEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `KmsKeyInfo`<sup>Required</sup> <a name="KmsKeyInfo" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.kmsKeyInfo"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList KmsKeyInfo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LockboxId`<sup>Required</sup> <a name="LockboxId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.lockboxId"></a>

```csharp
public string LockboxId { get; }
```

- *Type:* string

---

##### `MaintenancePolicy`<sup>Required</sup> <a name="MaintenancePolicy" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.maintenancePolicy"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList MaintenancePolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList</a>

---

##### `PublicUrl`<sup>Required</sup> <a name="PublicUrl" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.publicUrl"></a>

```csharp
public string PublicUrl { get; }
```

- *Type:* string

---

##### `Refresh`<sup>Required</sup> <a name="Refresh" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.refresh"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList Refresh { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.rules"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList Rules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubscriptionIds`<sup>Required</sup> <a name="SubscriptionIds" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.subscriptionIds"></a>

```csharp
public string[] SubscriptionIds { get; }
```

- *Type:* string[]

---

##### `SystemName`<sup>Required</sup> <a name="SystemName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.systemName"></a>

```csharp
public string SystemName { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpcomingMaintenance`<sup>Required</sup> <a name="TimeUpcomingMaintenance" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.timeUpcomingMaintenance"></a>

```csharp
public string TimeUpcomingMaintenance { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.get"></a>

```csharp
private DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.sourceFusionEnvironmentId">SourceFusionEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.timeFinished">TimeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.timeOfRestorationPoint">TimeOfRestorationPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceFusionEnvironmentId`<sup>Required</sup> <a name="SourceFusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.sourceFusionEnvironmentId"></a>

```csharp
public string SourceFusionEnvironmentId { get; }
```

- *Type:* string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.timeFinished"></a>

```csharp
public string TimeFinished { get; }
```

- *Type:* string

---

##### `TimeOfRestorationPoint`<sup>Required</sup> <a name="TimeOfRestorationPoint" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.timeOfRestorationPoint"></a>

```csharp
public string TimeOfRestorationPoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.internalValue"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.get"></a>

```csharp
private DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.attributeName">AttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.attributeName"></a>

```csharp
public string AttributeName { get; }
```

- *Type:* string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.internalValue"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.get"></a>

```csharp
private DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.conditions">Conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.conditions"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList Conditions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.get"></a>

```csharp
private DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.items"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection</a>

---



