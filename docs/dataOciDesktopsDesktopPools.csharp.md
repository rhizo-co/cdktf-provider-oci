# `dataOciDesktopsDesktopPools` Submodule <a name="`dataOciDesktopsDesktopPools` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDesktopsDesktopPools <a name="DataOciDesktopsDesktopPools" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools oci_desktops_desktop_pools}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPools(Construct Scope, string Id, DataOciDesktopsDesktopPoolsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig">DataOciDesktopsDesktopPoolsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig">DataOciDesktopsDesktopPoolsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetAvailabilityDomain"></a>

```csharp
private void ResetAvailabilityDomain()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDesktopsDesktopPools resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDesktopsDesktopPools.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDesktopsDesktopPools.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDesktopsDesktopPools.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDesktopsDesktopPools.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDesktopsDesktopPools resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDesktopsDesktopPools to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDesktopsDesktopPools that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDesktopsDesktopPools to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.desktopPoolCollection">DesktopPoolCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList">DataOciDesktopsDesktopPoolsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DesktopPoolCollection`<sup>Required</sup> <a name="DesktopPoolCollection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.desktopPoolCollection"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionList DesktopPoolCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.filter"></a>

```csharp
public DataOciDesktopsDesktopPoolsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList">DataOciDesktopsDesktopPoolsFilterList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDesktopsDesktopPoolsConfig <a name="DataOciDesktopsDesktopPoolsConfig" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#compartment_id DataOciDesktopsDesktopPools#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#availability_domain DataOciDesktopsDesktopPools#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#display_name DataOciDesktopsDesktopPools#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#id DataOciDesktopsDesktopPools#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#state DataOciDesktopsDesktopPools#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#compartment_id DataOciDesktopsDesktopPools#compartment_id}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#availability_domain DataOciDesktopsDesktopPools#availability_domain}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#display_name DataOciDesktopsDesktopPools#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#filter DataOciDesktopsDesktopPools#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#id DataOciDesktopsDesktopPools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#state DataOciDesktopsDesktopPools#state}.

---

### DataOciDesktopsDesktopPoolsDesktopPoolCollection <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollection {

};
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems {

};
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy {

};
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule {

};
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule {

};
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy {

};
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage {

};
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration {

};
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails {

};
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions {

};
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect {

};
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity {

};
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig {

};
```


### DataOciDesktopsDesktopPoolsFilter <a name="DataOciDesktopsDesktopPoolsFilter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#name DataOciDesktopsDesktopPools#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#values DataOciDesktopsDesktopPools#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#regex DataOciDesktopsDesktopPools#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#name DataOciDesktopsDesktopPools#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#values DataOciDesktopsDesktopPools#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#regex DataOciDesktopsDesktopPools#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.startSchedule">StartSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.stopSchedule">StopSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StartSchedule`<sup>Required</sup> <a name="StartSchedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.startSchedule"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList StartSchedule { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList</a>

---

##### `StopSchedule`<sup>Required</sup> <a name="StopSchedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.stopSchedule"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList StopSchedule { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.cronExpression">CronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.cronExpression"></a>

```csharp
public string CronExpression { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.cronExpression">CronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.cronExpression"></a>

```csharp
public string CronExpression { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.audioMode">AudioMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.cdmMode">CdmMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.clipboardMode">ClipboardMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isDisplayEnabled">IsDisplayEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isKeyboardEnabled">IsKeyboardEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isPointerEnabled">IsPointerEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isPrintingEnabled">IsPrintingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudioMode`<sup>Required</sup> <a name="AudioMode" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.audioMode"></a>

```csharp
public string AudioMode { get; }
```

- *Type:* string

---

##### `CdmMode`<sup>Required</sup> <a name="CdmMode" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.cdmMode"></a>

```csharp
public string CdmMode { get; }
```

- *Type:* string

---

##### `ClipboardMode`<sup>Required</sup> <a name="ClipboardMode" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.clipboardMode"></a>

```csharp
public string ClipboardMode { get; }
```

- *Type:* string

---

##### `IsDisplayEnabled`<sup>Required</sup> <a name="IsDisplayEnabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isDisplayEnabled"></a>

```csharp
public IResolvable IsDisplayEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsKeyboardEnabled`<sup>Required</sup> <a name="IsKeyboardEnabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isKeyboardEnabled"></a>

```csharp
public IResolvable IsKeyboardEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPointerEnabled`<sup>Required</sup> <a name="IsPointerEnabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isPointerEnabled"></a>

```csharp
public IResolvable IsPointerEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPrintingEnabled`<sup>Required</sup> <a name="IsPrintingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isPrintingEnabled"></a>

```csharp
public IResolvable IsPrintingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.vcnId">VcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.vcnId"></a>

```csharp
public string VcnId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.activeDesktops">ActiveDesktops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.arePrivilegedUsers">ArePrivilegedUsers</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.availabilityPolicy">AvailabilityPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.contactDetails">ContactDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.devicePolicy">DevicePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.image">Image</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.isStorageEnabled">IsStorageEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.maximumSize">MaximumSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.privateAccessDetails">PrivateAccessDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.sessionLifecycleActions">SessionLifecycleActions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.shapeName">ShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.standbySize">StandbySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.storageBackupPolicyId">StorageBackupPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.storageSizeInGbs">StorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeStartScheduled">TimeStartScheduled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeStopScheduled">TimeStopScheduled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.useDedicatedVmHost">UseDedicatedVmHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveDesktops`<sup>Required</sup> <a name="ActiveDesktops" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.activeDesktops"></a>

```csharp
public double ActiveDesktops { get; }
```

- *Type:* double

---

##### `ArePrivilegedUsers`<sup>Required</sup> <a name="ArePrivilegedUsers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.arePrivilegedUsers"></a>

```csharp
public IResolvable ArePrivilegedUsers { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `AvailabilityPolicy`<sup>Required</sup> <a name="AvailabilityPolicy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.availabilityPolicy"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList AvailabilityPolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ContactDetails`<sup>Required</sup> <a name="ContactDetails" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.contactDetails"></a>

```csharp
public string ContactDetails { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DevicePolicy`<sup>Required</sup> <a name="DevicePolicy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.devicePolicy"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList DevicePolicy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.image"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList Image { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList</a>

---

##### `IsStorageEnabled`<sup>Required</sup> <a name="IsStorageEnabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.isStorageEnabled"></a>

```csharp
public IResolvable IsStorageEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MaximumSize`<sup>Required</sup> <a name="MaximumSize" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.maximumSize"></a>

```csharp
public double MaximumSize { get; }
```

- *Type:* double

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.networkConfiguration"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList NetworkConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList</a>

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `PrivateAccessDetails`<sup>Required</sup> <a name="PrivateAccessDetails" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.privateAccessDetails"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList PrivateAccessDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList</a>

---

##### `SessionLifecycleActions`<sup>Required</sup> <a name="SessionLifecycleActions" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.sessionLifecycleActions"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList SessionLifecycleActions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList</a>

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.shapeConfig"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList ShapeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList</a>

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.shapeName"></a>

```csharp
public string ShapeName { get; }
```

- *Type:* string

---

##### `StandbySize`<sup>Required</sup> <a name="StandbySize" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.standbySize"></a>

```csharp
public double StandbySize { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageBackupPolicyId`<sup>Required</sup> <a name="StorageBackupPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.storageBackupPolicyId"></a>

```csharp
public string StorageBackupPolicyId { get; }
```

- *Type:* string

---

##### `StorageSizeInGbs`<sup>Required</sup> <a name="StorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.storageSizeInGbs"></a>

```csharp
public double StorageSizeInGbs { get; }
```

- *Type:* double

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeStartScheduled`<sup>Required</sup> <a name="TimeStartScheduled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeStartScheduled"></a>

```csharp
public string TimeStartScheduled { get; }
```

- *Type:* string

---

##### `TimeStopScheduled`<sup>Required</sup> <a name="TimeStopScheduled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeStopScheduled"></a>

```csharp
public string TimeStopScheduled { get; }
```

- *Type:* string

---

##### `UseDedicatedVmHost`<sup>Required</sup> <a name="UseDedicatedVmHost" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.useDedicatedVmHost"></a>

```csharp
public string UseDedicatedVmHost { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.endpointFqdn">EndpointFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.vcnId">VcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointFqdn`<sup>Required</sup> <a name="EndpointFqdn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.endpointFqdn"></a>

```csharp
public string EndpointFqdn { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.vcnId"></a>

```csharp
public string VcnId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutes">GracePeriodInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `GracePeriodInMinutes`<sup>Required</sup> <a name="GracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutes"></a>

```csharp
public double GracePeriodInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutes">GracePeriodInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `GracePeriodInMinutes`<sup>Required</sup> <a name="GracePeriodInMinutes" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutes"></a>

```csharp
public double GracePeriodInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.disconnect">Disconnect</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.inactivity">Inactivity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Disconnect`<sup>Required</sup> <a name="Disconnect" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.disconnect"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList Disconnect { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList</a>

---

##### `Inactivity`<sup>Required</sup> <a name="Inactivity" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.inactivity"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList Inactivity { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.baselineOcpuUtilization">BaselineOcpuUtilization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaselineOcpuUtilization`<sup>Required</sup> <a name="BaselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.baselineOcpuUtilization"></a>

```csharp
public string BaselineOcpuUtilization { get; }
```

- *Type:* string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.memoryInGbs"></a>

```csharp
public string MemoryInGbs { get; }
```

- *Type:* string

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.ocpus"></a>

```csharp
public string Ocpus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollection">DataOciDesktopsDesktopPoolsDesktopPoolCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.items"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDesktopsDesktopPoolsDesktopPoolCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollection">DataOciDesktopsDesktopPoolsDesktopPoolCollection</a>

---


### DataOciDesktopsDesktopPoolsFilterList <a name="DataOciDesktopsDesktopPoolsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.get"></a>

```csharp
private DataOciDesktopsDesktopPoolsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDesktopsDesktopPoolsFilterOutputReference <a name="DataOciDesktopsDesktopPoolsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDesktopsDesktopPoolsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



