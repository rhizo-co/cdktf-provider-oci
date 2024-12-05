# `dataOciServiceMeshIngressGatewayRouteTables` Submodule <a name="`dataOciServiceMeshIngressGatewayRouteTables` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshIngressGatewayRouteTables <a name="DataOciServiceMeshIngressGatewayRouteTables" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables oci_service_mesh_ingress_gateway_route_tables}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayRouteTables(Construct Scope, string Id, DataOciServiceMeshIngressGatewayRouteTablesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig">DataOciServiceMeshIngressGatewayRouteTablesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig">DataOciServiceMeshIngressGatewayRouteTablesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetIngressGatewayId">ResetIngressGatewayId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIngressGatewayId` <a name="ResetIngressGatewayId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetIngressGatewayId"></a>

```csharp
private void ResetIngressGatewayId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceMeshIngressGatewayRouteTables resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceMeshIngressGatewayRouteTables.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceMeshIngressGatewayRouteTables.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceMeshIngressGatewayRouteTables.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceMeshIngressGatewayRouteTables.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciServiceMeshIngressGatewayRouteTables resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciServiceMeshIngressGatewayRouteTables to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciServiceMeshIngressGatewayRouteTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshIngressGatewayRouteTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList">DataOciServiceMeshIngressGatewayRouteTablesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayRouteTableCollection">IngressGatewayRouteTableCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayIdInput">IngressGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayId">IngressGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.filter"></a>

```csharp
public DataOciServiceMeshIngressGatewayRouteTablesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList">DataOciServiceMeshIngressGatewayRouteTablesFilterList</a>

---

##### `IngressGatewayRouteTableCollection`<sup>Required</sup> <a name="IngressGatewayRouteTableCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayRouteTableCollection"></a>

```csharp
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList IngressGatewayRouteTableCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IngressGatewayIdInput`<sup>Optional</sup> <a name="IngressGatewayIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayIdInput"></a>

```csharp
public string IngressGatewayIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IngressGatewayId`<sup>Required</sup> <a name="IngressGatewayId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.ingressGatewayId"></a>

```csharp
public string IngressGatewayId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTables.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshIngressGatewayRouteTablesConfig <a name="DataOciServiceMeshIngressGatewayRouteTablesConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayRouteTablesConfig {
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
    string IngressGatewayId = null,
    string Name = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#compartment_id DataOciServiceMeshIngressGatewayRouteTables#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#id DataOciServiceMeshIngressGatewayRouteTables#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.ingressGatewayId">IngressGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#ingress_gateway_id DataOciServiceMeshIngressGatewayRouteTables#ingress_gateway_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#name DataOciServiceMeshIngressGatewayRouteTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#state DataOciServiceMeshIngressGatewayRouteTables#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#compartment_id DataOciServiceMeshIngressGatewayRouteTables#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#filter DataOciServiceMeshIngressGatewayRouteTables#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#id DataOciServiceMeshIngressGatewayRouteTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IngressGatewayId`<sup>Optional</sup> <a name="IngressGatewayId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.ingressGatewayId"></a>

```csharp
public string IngressGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#ingress_gateway_id DataOciServiceMeshIngressGatewayRouteTables#ingress_gateway_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#name DataOciServiceMeshIngressGatewayRouteTables#name}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#state DataOciServiceMeshIngressGatewayRouteTables#state}.

---

### DataOciServiceMeshIngressGatewayRouteTablesFilter <a name="DataOciServiceMeshIngressGatewayRouteTablesFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayRouteTablesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#name DataOciServiceMeshIngressGatewayRouteTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#values DataOciServiceMeshIngressGatewayRouteTables#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#regex DataOciServiceMeshIngressGatewayRouteTables#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#name DataOciServiceMeshIngressGatewayRouteTables#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#values DataOciServiceMeshIngressGatewayRouteTables#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateway_route_tables#regex DataOciServiceMeshIngressGatewayRouteTables#regex}.

---

### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection {

};
```


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems {

};
```


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules {

};
```


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations {

};
```


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshIngressGatewayRouteTablesFilterList <a name="DataOciServiceMeshIngressGatewayRouteTablesFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayRouteTablesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.ingressGatewayId">IngressGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.routeRules">RouteRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IngressGatewayId`<sup>Required</sup> <a name="IngressGatewayId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.ingressGatewayId"></a>

```csharp
public string IngressGatewayId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `RouteRules`<sup>Required</sup> <a name="RouteRules" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.routeRules"></a>

```csharp
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList RouteRules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItems</a>

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.virtualServiceId">VirtualServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `VirtualServiceId`<sup>Required</sup> <a name="VirtualServiceId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.virtualServiceId"></a>

```csharp
public string VirtualServiceId { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinations</a>

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHost</a>

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.destinations">Destinations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.ingressGatewayHost">IngressGatewayHost</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isGrpc">IsGrpc</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isHostRewriteEnabled">IsHostRewriteEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isPathRewriteEnabled">IsPathRewriteEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.pathType">PathType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.requestTimeoutInMs">RequestTimeoutInMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.destinations"></a>

```csharp
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList Destinations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesDestinationsList</a>

---

##### `IngressGatewayHost`<sup>Required</sup> <a name="IngressGatewayHost" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.ingressGatewayHost"></a>

```csharp
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList IngressGatewayHost { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesIngressGatewayHostList</a>

---

##### `IsGrpc`<sup>Required</sup> <a name="IsGrpc" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isGrpc"></a>

```csharp
public IResolvable IsGrpc { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsHostRewriteEnabled`<sup>Required</sup> <a name="IsHostRewriteEnabled" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isHostRewriteEnabled"></a>

```csharp
public IResolvable IsHostRewriteEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPathRewriteEnabled`<sup>Required</sup> <a name="IsPathRewriteEnabled" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.isPathRewriteEnabled"></a>

```csharp
public IResolvable IsPathRewriteEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `PathType`<sup>Required</sup> <a name="PathType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.pathType"></a>

```csharp
public string PathType { get; }
```

- *Type:* string

---

##### `RequestTimeoutInMs`<sup>Required</sup> <a name="RequestTimeoutInMs" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.requestTimeoutInMs"></a>

```csharp
public string RequestTimeoutInMs { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsRouteRules</a>

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference <a name="DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.items"></a>

```csharp
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGatewayRouteTables.DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection">DataOciServiceMeshIngressGatewayRouteTablesIngressGatewayRouteTableCollection</a>

---



