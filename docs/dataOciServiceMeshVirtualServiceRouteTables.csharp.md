# `dataOciServiceMeshVirtualServiceRouteTables` Submodule <a name="`dataOciServiceMeshVirtualServiceRouteTables` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshVirtualServiceRouteTables <a name="DataOciServiceMeshVirtualServiceRouteTables" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables oci_service_mesh_virtual_service_route_tables}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshVirtualServiceRouteTables(Construct Scope, string Id, DataOciServiceMeshVirtualServiceRouteTablesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig">DataOciServiceMeshVirtualServiceRouteTablesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig">DataOciServiceMeshVirtualServiceRouteTablesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetVirtualServiceId">ResetVirtualServiceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetVirtualServiceId` <a name="ResetVirtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.resetVirtualServiceId"></a>

```csharp
private void ResetVirtualServiceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceMeshVirtualServiceRouteTables resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceMeshVirtualServiceRouteTables.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceMeshVirtualServiceRouteTables.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceMeshVirtualServiceRouteTables.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceMeshVirtualServiceRouteTables.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciServiceMeshVirtualServiceRouteTables resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciServiceMeshVirtualServiceRouteTables to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciServiceMeshVirtualServiceRouteTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshVirtualServiceRouteTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList">DataOciServiceMeshVirtualServiceRouteTablesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceRouteTableCollection">VirtualServiceRouteTableCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceIdInput">VirtualServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceId">VirtualServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.filter"></a>

```csharp
public DataOciServiceMeshVirtualServiceRouteTablesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList">DataOciServiceMeshVirtualServiceRouteTablesFilterList</a>

---

##### `VirtualServiceRouteTableCollection`<sup>Required</sup> <a name="VirtualServiceRouteTableCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceRouteTableCollection"></a>

```csharp
public DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList VirtualServiceRouteTableCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `VirtualServiceIdInput`<sup>Optional</sup> <a name="VirtualServiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceIdInput"></a>

```csharp
public string VirtualServiceIdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `VirtualServiceId`<sup>Required</sup> <a name="VirtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.virtualServiceId"></a>

```csharp
public string VirtualServiceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTables.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshVirtualServiceRouteTablesConfig <a name="DataOciServiceMeshVirtualServiceRouteTablesConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshVirtualServiceRouteTablesConfig {
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
    string State = null,
    string VirtualServiceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#compartment_id DataOciServiceMeshVirtualServiceRouteTables#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#id DataOciServiceMeshVirtualServiceRouteTables#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#name DataOciServiceMeshVirtualServiceRouteTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#state DataOciServiceMeshVirtualServiceRouteTables#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.virtualServiceId">VirtualServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#virtual_service_id DataOciServiceMeshVirtualServiceRouteTables#virtual_service_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#compartment_id DataOciServiceMeshVirtualServiceRouteTables#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#filter DataOciServiceMeshVirtualServiceRouteTables#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#id DataOciServiceMeshVirtualServiceRouteTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#name DataOciServiceMeshVirtualServiceRouteTables#name}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#state DataOciServiceMeshVirtualServiceRouteTables#state}.

---

##### `VirtualServiceId`<sup>Optional</sup> <a name="VirtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesConfig.property.virtualServiceId"></a>

```csharp
public string VirtualServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#virtual_service_id DataOciServiceMeshVirtualServiceRouteTables#virtual_service_id}.

---

### DataOciServiceMeshVirtualServiceRouteTablesFilter <a name="DataOciServiceMeshVirtualServiceRouteTablesFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshVirtualServiceRouteTablesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#name DataOciServiceMeshVirtualServiceRouteTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#values DataOciServiceMeshVirtualServiceRouteTables#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#regex DataOciServiceMeshVirtualServiceRouteTables#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#name DataOciServiceMeshVirtualServiceRouteTables#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#values DataOciServiceMeshVirtualServiceRouteTables#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_service_route_tables#regex DataOciServiceMeshVirtualServiceRouteTables#regex}.

---

### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection {

};
```


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems {

};
```


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules {

};
```


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshVirtualServiceRouteTablesFilterList <a name="DataOciServiceMeshVirtualServiceRouteTablesFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshVirtualServiceRouteTablesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.get"></a>

```csharp
private DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.get"></a>

```csharp
private DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.routeRules">RouteRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.virtualServiceId">VirtualServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `RouteRules`<sup>Required</sup> <a name="RouteRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.routeRules"></a>

```csharp
public DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList RouteRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `VirtualServiceId`<sup>Required</sup> <a name="VirtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.virtualServiceId"></a>

```csharp
public string VirtualServiceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItems</a>

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.get"></a>

```csharp
private DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.virtualDeploymentId">VirtualDeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `VirtualDeploymentId`<sup>Required</sup> <a name="VirtualDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.virtualDeploymentId"></a>

```csharp
public string VirtualDeploymentId { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinations</a>

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.get"></a>

```csharp
private DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.destinations">Destinations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.isGrpc">IsGrpc</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.pathType">PathType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.requestTimeoutInMs">RequestTimeoutInMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.destinations"></a>

```csharp
public DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList Destinations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesDestinationsList</a>

---

##### `IsGrpc`<sup>Required</sup> <a name="IsGrpc" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.isGrpc"></a>

```csharp
public IResolvable IsGrpc { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `PathType`<sup>Required</sup> <a name="PathType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.pathType"></a>

```csharp
public string PathType { get; }
```

- *Type:* string

---

##### `RequestTimeoutInMs`<sup>Required</sup> <a name="RequestTimeoutInMs" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.requestTimeoutInMs"></a>

```csharp
public string RequestTimeoutInMs { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsRouteRules</a>

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.get"></a>

```csharp
private DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference <a name="DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.items"></a>

```csharp
public DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServiceRouteTables.DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection">DataOciServiceMeshVirtualServiceRouteTablesVirtualServiceRouteTableCollection</a>

---



