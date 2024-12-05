# `dataOciDesktopsDesktopPoolDesktops` Submodule <a name="`dataOciDesktopsDesktopPoolDesktops` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDesktopsDesktopPoolDesktops <a name="DataOciDesktopsDesktopPoolDesktops" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops oci_desktops_desktop_pool_desktops}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolDesktops(Construct Scope, string Id, DataOciDesktopsDesktopPoolDesktopsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig">DataOciDesktopsDesktopPoolDesktopsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig">DataOciDesktopsDesktopPoolDesktopsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetAvailabilityDomain"></a>

```csharp
private void ResetAvailabilityDomain()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDesktopsDesktopPoolDesktops resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDesktopsDesktopPoolDesktops.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDesktopsDesktopPoolDesktops.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDesktopsDesktopPoolDesktops.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDesktopsDesktopPoolDesktops.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDesktopsDesktopPoolDesktops resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDesktopsDesktopPoolDesktops to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDesktopsDesktopPoolDesktops that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDesktopsDesktopPoolDesktops to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.desktopPoolDesktopCollection">DesktopPoolDesktopCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList">DataOciDesktopsDesktopPoolDesktopsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.desktopPoolIdInput">DesktopPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.desktopPoolId">DesktopPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DesktopPoolDesktopCollection`<sup>Required</sup> <a name="DesktopPoolDesktopCollection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.desktopPoolDesktopCollection"></a>

```csharp
public DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList DesktopPoolDesktopCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.filter"></a>

```csharp
public DataOciDesktopsDesktopPoolDesktopsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList">DataOciDesktopsDesktopPoolDesktopsFilterList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DesktopPoolIdInput`<sup>Optional</sup> <a name="DesktopPoolIdInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.desktopPoolIdInput"></a>

```csharp
public string DesktopPoolIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DesktopPoolId`<sup>Required</sup> <a name="DesktopPoolId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.desktopPoolId"></a>

```csharp
public string DesktopPoolId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktops.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDesktopsDesktopPoolDesktopsConfig <a name="DataOciDesktopsDesktopPoolDesktopsConfig" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolDesktopsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DesktopPoolId,
    string AvailabilityDomain = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#compartment_id DataOciDesktopsDesktopPoolDesktops#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.desktopPoolId">DesktopPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#desktop_pool_id DataOciDesktopsDesktopPoolDesktops#desktop_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#availability_domain DataOciDesktopsDesktopPoolDesktops#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#display_name DataOciDesktopsDesktopPoolDesktops#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#id DataOciDesktopsDesktopPoolDesktops#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#state DataOciDesktopsDesktopPoolDesktops#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#compartment_id DataOciDesktopsDesktopPoolDesktops#compartment_id}.

---

##### `DesktopPoolId`<sup>Required</sup> <a name="DesktopPoolId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.desktopPoolId"></a>

```csharp
public string DesktopPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#desktop_pool_id DataOciDesktopsDesktopPoolDesktops#desktop_pool_id}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#availability_domain DataOciDesktopsDesktopPoolDesktops#availability_domain}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#display_name DataOciDesktopsDesktopPoolDesktops#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#filter DataOciDesktopsDesktopPoolDesktops#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#id DataOciDesktopsDesktopPoolDesktops#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#state DataOciDesktopsDesktopPoolDesktops#state}.

---

### DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection <a name="DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection {

};
```


### DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems <a name="DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems {

};
```


### DataOciDesktopsDesktopPoolDesktopsFilter <a name="DataOciDesktopsDesktopPoolDesktopsFilter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolDesktopsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#name DataOciDesktopsDesktopPoolDesktops#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#values DataOciDesktopsDesktopPoolDesktops#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#regex DataOciDesktopsDesktopPoolDesktops#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#name DataOciDesktopsDesktopPoolDesktops#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#values DataOciDesktopsDesktopPoolDesktops#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_desktops#regex DataOciDesktopsDesktopPoolDesktops#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList <a name="DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference <a name="DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.desktopId">DesktopId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.isAssigned">IsAssigned</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DesktopId`<sup>Required</sup> <a name="DesktopId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.desktopId"></a>

```csharp
public string DesktopId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `IsAssigned`<sup>Required</sup> <a name="IsAssigned" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.isAssigned"></a>

```csharp
public IResolvable IsAssigned { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItems</a>

---


### DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList <a name="DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference <a name="DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.items"></a>

```csharp
public DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection">DataOciDesktopsDesktopPoolDesktopsDesktopPoolDesktopCollection</a>

---


### DataOciDesktopsDesktopPoolDesktopsFilterList <a name="DataOciDesktopsDesktopPoolDesktopsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolDesktopsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolDesktopsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDesktopsDesktopPoolDesktopsFilterOutputReference <a name="DataOciDesktopsDesktopPoolDesktopsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolDesktopsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolDesktops.DataOciDesktopsDesktopPoolDesktopsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



