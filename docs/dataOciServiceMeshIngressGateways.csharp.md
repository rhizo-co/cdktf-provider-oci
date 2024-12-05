# `dataOciServiceMeshIngressGateways` Submodule <a name="`dataOciServiceMeshIngressGateways` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshIngressGateways <a name="DataOciServiceMeshIngressGateways" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways oci_service_mesh_ingress_gateways}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGateways(Construct Scope, string Id, DataOciServiceMeshIngressGatewaysConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig">DataOciServiceMeshIngressGatewaysConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig">DataOciServiceMeshIngressGatewaysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetMeshId">ResetMeshId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMeshId` <a name="ResetMeshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetMeshId"></a>

```csharp
private void ResetMeshId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceMeshIngressGateways resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceMeshIngressGateways.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceMeshIngressGateways.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceMeshIngressGateways.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciServiceMeshIngressGateways.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciServiceMeshIngressGateways resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciServiceMeshIngressGateways to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciServiceMeshIngressGateways that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshIngressGateways to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList">DataOciServiceMeshIngressGatewaysFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.ingressGatewayCollection">IngressGatewayCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.meshIdInput">MeshIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.meshId">MeshId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.filter"></a>

```csharp
public DataOciServiceMeshIngressGatewaysFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList">DataOciServiceMeshIngressGatewaysFilterList</a>

---

##### `IngressGatewayCollection`<sup>Required</sup> <a name="IngressGatewayCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.ingressGatewayCollection"></a>

```csharp
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList IngressGatewayCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MeshIdInput`<sup>Optional</sup> <a name="MeshIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.meshIdInput"></a>

```csharp
public string MeshIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MeshId`<sup>Required</sup> <a name="MeshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.meshId"></a>

```csharp
public string MeshId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshIngressGatewaysConfig <a name="DataOciServiceMeshIngressGatewaysConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysConfig {
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
    string MeshId = null,
    string Name = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#compartment_id DataOciServiceMeshIngressGateways#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#id DataOciServiceMeshIngressGateways#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.meshId">MeshId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#mesh_id DataOciServiceMeshIngressGateways#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#name DataOciServiceMeshIngressGateways#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#state DataOciServiceMeshIngressGateways#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#compartment_id DataOciServiceMeshIngressGateways#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#filter DataOciServiceMeshIngressGateways#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#id DataOciServiceMeshIngressGateways#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MeshId`<sup>Optional</sup> <a name="MeshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.meshId"></a>

```csharp
public string MeshId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#mesh_id DataOciServiceMeshIngressGateways#mesh_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#name DataOciServiceMeshIngressGateways#name}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#state DataOciServiceMeshIngressGateways#state}.

---

### DataOciServiceMeshIngressGatewaysFilter <a name="DataOciServiceMeshIngressGatewaysFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#name DataOciServiceMeshIngressGateways#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#values DataOciServiceMeshIngressGateways#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#regex DataOciServiceMeshIngressGateways#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#name DataOciServiceMeshIngressGateways#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#values DataOciServiceMeshIngressGateways#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#regex DataOciServiceMeshIngressGateways#regex}.

---

### DataOciServiceMeshIngressGatewaysIngressGatewayCollection <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollection {

};
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems {

};
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging {

};
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts {

};
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners {

};
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls {

};
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation {

};
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle {

};
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate {

};
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshIngressGatewaysFilterList <a name="DataOciServiceMeshIngressGatewaysFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewaysFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciServiceMeshIngressGatewaysFilterOutputReference <a name="DataOciServiceMeshIngressGatewaysFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.tls">Tls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.tls"></a>

```csharp
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList Tls { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNames">SubjectAlternateNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.trustedCaBundle">TrustedCaBundle</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubjectAlternateNames`<sup>Required</sup> <a name="SubjectAlternateNames" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNames"></a>

```csharp
public string[] SubjectAlternateNames { get; }
```

- *Type:* string[]

---

##### `TrustedCaBundle`<sup>Required</sup> <a name="TrustedCaBundle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.trustedCaBundle"></a>

```csharp
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList TrustedCaBundle { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleId">CaBundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaBundleId`<sup>Required</sup> <a name="CaBundleId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleId"></a>

```csharp
public string CaBundleId { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.clientValidation">ClientValidation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.serverCertificate">ServerCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientValidation`<sup>Required</sup> <a name="ClientValidation" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.clientValidation"></a>

```csharp
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList ClientValidation { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList</a>

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `ServerCertificate`<sup>Required</sup> <a name="ServerCertificate" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.serverCertificate"></a>

```csharp
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList ServerCertificate { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.hostnames">Hostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.listeners">Listeners</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.hostnames"></a>

```csharp
public string[] Hostnames { get; }
```

- *Type:* string[]

---

##### `Listeners`<sup>Required</sup> <a name="Listeners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.listeners"></a>

```csharp
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList Listeners { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.maximumValidity">MaximumValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `MaximumValidity`<sup>Required</sup> <a name="MaximumValidity" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.maximumValidity"></a>

```csharp
public double MaximumValidity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.accessLogging">AccessLogging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.hosts">Hosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.meshId">MeshId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.mtls">Mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessLogging`<sup>Required</sup> <a name="AccessLogging" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.accessLogging"></a>

```csharp
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList AccessLogging { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.hosts"></a>

```csharp
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList Hosts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `MeshId`<sup>Required</sup> <a name="MeshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.meshId"></a>

```csharp
public string MeshId { get; }
```

- *Type:* string

---

##### `Mtls`<sup>Required</sup> <a name="Mtls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.mtls"></a>

```csharp
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList Mtls { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.get"></a>

```csharp
private DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollection">DataOciServiceMeshIngressGatewaysIngressGatewayCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.items"></a>

```csharp
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciServiceMeshIngressGatewaysIngressGatewayCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollection">DataOciServiceMeshIngressGatewaysIngressGatewayCollection</a>

---



