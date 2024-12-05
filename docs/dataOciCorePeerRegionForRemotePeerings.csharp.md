# `dataOciCorePeerRegionForRemotePeerings` Submodule <a name="`dataOciCorePeerRegionForRemotePeerings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCorePeerRegionForRemotePeerings <a name="DataOciCorePeerRegionForRemotePeerings" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings oci_core_peer_region_for_remote_peerings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCorePeerRegionForRemotePeerings(Construct Scope, string Id, DataOciCorePeerRegionForRemotePeeringsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig">DataOciCorePeerRegionForRemotePeeringsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig">DataOciCorePeerRegionForRemotePeeringsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCorePeerRegionForRemotePeerings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCorePeerRegionForRemotePeerings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCorePeerRegionForRemotePeerings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCorePeerRegionForRemotePeerings.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCorePeerRegionForRemotePeerings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCorePeerRegionForRemotePeerings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCorePeerRegionForRemotePeerings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCorePeerRegionForRemotePeerings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCorePeerRegionForRemotePeerings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList">DataOciCorePeerRegionForRemotePeeringsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.peerRegionForRemotePeerings">PeerRegionForRemotePeerings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList">DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.filter"></a>

```csharp
public DataOciCorePeerRegionForRemotePeeringsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList">DataOciCorePeerRegionForRemotePeeringsFilterList</a>

---

##### `PeerRegionForRemotePeerings`<sup>Required</sup> <a name="PeerRegionForRemotePeerings" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.peerRegionForRemotePeerings"></a>

```csharp
public DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList PeerRegionForRemotePeerings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList">DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeerings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCorePeerRegionForRemotePeeringsConfig <a name="DataOciCorePeerRegionForRemotePeeringsConfig" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCorePeerRegionForRemotePeeringsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#id DataOciCorePeerRegionForRemotePeerings#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#filter DataOciCorePeerRegionForRemotePeerings#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#id DataOciCorePeerRegionForRemotePeerings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCorePeerRegionForRemotePeeringsFilter <a name="DataOciCorePeerRegionForRemotePeeringsFilter" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCorePeerRegionForRemotePeeringsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#name DataOciCorePeerRegionForRemotePeerings#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#values DataOciCorePeerRegionForRemotePeerings#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#regex DataOciCorePeerRegionForRemotePeerings#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#name DataOciCorePeerRegionForRemotePeerings#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#values DataOciCorePeerRegionForRemotePeerings#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_peer_region_for_remote_peerings#regex DataOciCorePeerRegionForRemotePeerings#regex}.

---

### DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings <a name="DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCorePeerRegionForRemotePeeringsFilterList <a name="DataOciCorePeerRegionForRemotePeeringsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCorePeerRegionForRemotePeeringsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.get"></a>

```csharp
private DataOciCorePeerRegionForRemotePeeringsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCorePeerRegionForRemotePeeringsFilterOutputReference <a name="DataOciCorePeerRegionForRemotePeeringsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCorePeerRegionForRemotePeeringsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList <a name="DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.get"></a>

```csharp
private DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference <a name="DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings">DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeeringsOutputReference.property.internalValue"></a>

```csharp
public DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCorePeerRegionForRemotePeerings.DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings">DataOciCorePeerRegionForRemotePeeringsPeerRegionForRemotePeerings</a>

---



